/**
 * Iron Lady AI Assistant - Main Application
 */

class ChatApp {
    constructor() {
        // DOM Elements
        this.sidebar = document.getElementById('sidebar');
        this.sidebarOverlay = document.getElementById('sidebarOverlay');
        this.toggleSidebarBtn = document.getElementById('toggleSidebar');
        this.expandSidebarBtn = document.getElementById('expandSidebarBtn');
        this.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.newChatBtn = document.getElementById('newChatBtn');
        this.conversationsList = document.getElementById('conversationsList');
        this.messagesWrapper = document.getElementById('messagesWrapper');
        this.messagesContainer = document.getElementById('messagesContainer');
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.clearChatBtn = document.getElementById('clearChatBtn');
        this.currentChatTitle = document.getElementById('currentChatTitle');
        this.deleteModal = document.getElementById('deleteModal');
        this.cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
        this.confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

        // State
        this.conversations = [];
        this.currentConversationId = null;
        this.conversationToDelete = null;

        // Initialize
        this.loadConversations();
        this.bindEvents();
        this.setupQuickReplyDelegation();
        this.renderConversationsList();
    }

    bindEvents() {
        // Sidebar toggle
        this.toggleSidebarBtn.addEventListener('click', () => this.toggleSidebar());
        this.expandSidebarBtn.addEventListener('click', () => this.expandSidebar());
        this.mobileMenuBtn.addEventListener('click', () => this.openSidebar());
        this.sidebarOverlay.addEventListener('click', () => this.closeSidebar());

        // New chat
        this.newChatBtn.addEventListener('click', () => this.createNewConversation());

        // Send message
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize textarea
        this.messageInput.addEventListener('input', () => this.autoResizeTextarea());

        // Quick action buttons - use event delegation to avoid duplicate bindings
        this.messagesWrapper.addEventListener('click', (e) => {
            const btn = e.target.closest('.quick-action-btn');
            if (btn) {
                const question = btn.dataset.question;
                this.messageInput.value = question;
                this.sendMessage();
            }
        });

        // Clear chat
        this.clearChatBtn.addEventListener('click', () => this.clearCurrentChat());

        // Delete modal
        this.cancelDeleteBtn.addEventListener('click', () => this.closeDeleteModal());
        this.confirmDeleteBtn.addEventListener('click', () => this.confirmDelete());
        this.deleteModal.addEventListener('click', (e) => {
            if (e.target === this.deleteModal) this.closeDeleteModal();
        });
    }

    // Sidebar functions
    toggleSidebar() {
        this.sidebar.classList.toggle('collapsed');
    }

    expandSidebar() {
        this.sidebar.classList.remove('collapsed');
    }

    openSidebar() {
        this.sidebar.classList.add('open');
        this.sidebarOverlay.classList.add('active');
    }

    closeSidebar() {
        this.sidebar.classList.remove('open');
        this.sidebarOverlay.classList.remove('active');
    }

    // Textarea auto-resize
    autoResizeTextarea() {
        this.messageInput.style.height = 'auto';
        this.messageInput.style.height = Math.min(this.messageInput.scrollHeight, 150) + 'px';
    }

    // Conversation management
    loadConversations() {
        const saved = localStorage.getItem('ironLadyConversations');
        if (saved) {
            this.conversations = JSON.parse(saved);
        }
    }

    saveConversations() {
        localStorage.setItem('ironLadyConversations', JSON.stringify(this.conversations));
    }

    createNewConversation() {
        const conversation = {
            id: Date.now().toString(),
            title: 'New Conversation',
            messages: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.conversations.unshift(conversation);
        this.saveConversations();
        this.currentConversationId = conversation.id;
        this.renderConversationsList();
        this.renderMessages();
        this.closeSidebar();
        this.updateChatTitle('New Conversation');
    }

    selectConversation(id) {
        this.currentConversationId = id;
        this.renderConversationsList();
        this.renderMessages();
        this.closeSidebar();

        const conv = this.conversations.find(c => c.id === id);
        if (conv) {
            this.updateChatTitle(conv.title);
        }
    }

    deleteConversation(id) {
        this.conversationToDelete = id;
        this.deleteModal.classList.add('active');
    }

    closeDeleteModal() {
        this.deleteModal.classList.remove('active');
        this.conversationToDelete = null;
    }

    confirmDelete() {
        if (this.conversationToDelete) {
            this.conversations = this.conversations.filter(c => c.id !== this.conversationToDelete);
            this.saveConversations();

            if (this.currentConversationId === this.conversationToDelete) {
                this.currentConversationId = null;
                this.renderMessages();
                this.updateChatTitle('New Conversation');
            }

            this.renderConversationsList();
            this.closeDeleteModal();
        }
    }

    clearCurrentChat() {
        if (this.currentConversationId) {
            const conv = this.conversations.find(c => c.id === this.currentConversationId);
            if (conv) {
                conv.messages = [];
                conv.title = 'New Conversation';
                this.saveConversations();
                this.renderMessages();
                this.renderConversationsList();
                this.updateChatTitle('New Conversation');
            }
        }
    }

    updateChatTitle(title) {
        this.currentChatTitle.textContent = title;
    }

    // Rendering
    renderConversationsList() {
        if (this.conversations.length === 0) {
            this.conversationsList.innerHTML = `
                <div class="empty-conversations">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>No conversations yet.<br>Start a new one!</p>
                </div>
            `;
            return;
        }

        this.conversationsList.innerHTML = this.conversations.map(conv => `
            <div class="conversation-item ${conv.id === this.currentConversationId ? 'active' : ''}" 
                 data-id="${conv.id}">
                <div class="conversation-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="conversation-info">
                    <div class="conversation-title">${this.escapeHtml(conv.title)}</div>
                    <div class="conversation-date">${this.formatDate(conv.updatedAt)}</div>
                </div>
                <button class="conversation-delete" data-id="${conv.id}" title="Delete conversation">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `).join('');

        // Bind click events
        this.conversationsList.querySelectorAll('.conversation-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('.conversation-delete')) {
                    this.selectConversation(item.dataset.id);
                }
            });
        });

        this.conversationsList.querySelectorAll('.conversation-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteConversation(btn.dataset.id);
            });
        });
    }

    renderMessages() {
        if (!this.currentConversationId) {
            this.showWelcomeScreen();
            return;
        }

        const conv = this.conversations.find(c => c.id === this.currentConversationId);
        if (!conv || conv.messages.length === 0) {
            this.showWelcomeScreen();
            return;
        }

        // Pass isLatest flag to show quick replies only on the last message
        this.messagesWrapper.innerHTML = conv.messages.map((msg, index) => {
            const isLatest = index === conv.messages.length - 1;
            return this.createMessageHTML(msg, isLatest);
        }).join('');

        this.scrollToBottom();
        // Quick reply events are handled via event delegation set up in constructor
    }

    showWelcomeScreen() {
        this.messagesWrapper.innerHTML = `
            <div class="welcome-screen">
                <div class="welcome-icon">
                    <img src="logo.png" alt="Iron Lady AI" class="welcome-logo-img">
                </div>
                <h2>Welcome to Iron Lady! 🌟</h2>
                <p class="welcome-tagline">Empowering Women, Transforming Lives</p>
                <p>I am your AI assistant, here to help you understand our programs, services, and guide you through your growth journey. Ask me anything!</p>
                <div class="quick-actions">
                    <button class="quick-action-btn" data-question="What is Iron Lady?">
                        <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                        About Iron Lady
                    </button>
                    <button class="quick-action-btn" data-question="What programs do you offer?">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2"/><path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" stroke-width="2"/></svg>
                        Our Programs
                    </button>
                    <button class="quick-action-btn" data-question="Tell me about the Women Empowerment Program">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>
                        Women Empowerment
                    </button>
                    <button class="quick-action-btn" data-question="How can I enroll?">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2"/><circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M20 8V14M17 11H23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                        How to Enroll
                    </button>
                    <button class="quick-action-btn" data-question="What are the benefits of joining Iron Lady?">
                        <svg viewBox="0 0 24 24" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        Why Join Us?
                    </button>
                    <button class="quick-action-btn" data-question="Tell me about mentorship and support">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2"/></svg>
                        Mentorship Support
                    </button>
                </div>
            </div>
        `;

        // Quick action events are handled via event delegation in bindEvents()
    }

    createMessageHTML(msg, isLatest = false) {
        const userIcon = '<svg viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg>';
        const assistantIcon = '<img src="logo.png" alt="Iron Lady AI" class="message-avatar-img">';
        const icon = msg.role === 'user' ? userIcon : assistantIcon;

        // Handle new structured response format
        let content = msg.content;
        let quickReplies = [];
        let followUp = null;

        if (typeof msg.content === 'object' && msg.content !== null) {
            content = msg.content.text || '';
            quickReplies = msg.content.quickReplies || [];
            followUp = msg.content.followUp || null;
        }

        // Build quick replies HTML (only for latest assistant message)
        let quickRepliesHTML = '';
        if (msg.role === 'assistant' && isLatest && quickReplies.length > 0) {
            quickRepliesHTML = `
                <div class="quick-replies">
                    ${quickReplies.map(reply => `
                        <button class="quick-reply-btn" data-reply="${this.escapeHtml(reply)}">
                            ${this.escapeHtml(reply)}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        // Build follow-up question HTML
        let followUpHTML = '';
        if (msg.role === 'assistant' && isLatest && followUp) {
            followUpHTML = `<div class="follow-up-question">${followUp}</div>`;
        }

        return `
            <div class="message ${msg.role}">
                <div class="message-avatar">${icon}</div>
                <div class="message-content">
                    <div class="message-text">${content}</div>
                    ${followUpHTML}
                    ${quickRepliesHTML}
                    <div class="message-time">${this.formatTime(msg.timestamp)}</div>
                </div>
            </div>
        `;
    }

    // Bind quick reply button events using event delegation (called once in bindEvents)
    setupQuickReplyDelegation() {
        this.messagesWrapper.addEventListener('click', (e) => {
            const btn = e.target.closest('.quick-reply-btn');
            if (btn) {
                const replyText = btn.dataset.reply;
                const question = window.getQuickReplyQuestion ? window.getQuickReplyQuestion(replyText) : replyText;
                this.messageInput.value = question;
                this.sendMessage();
            }
        });
    }

    // Message sending
    async sendMessage() {
        const text = this.messageInput.value.trim();
        if (!text) return;

        // Create conversation if none exists
        if (!this.currentConversationId) {
            this.createNewConversation();
        }

        const conv = this.conversations.find(c => c.id === this.currentConversationId);
        if (!conv) return;

        // Add user message
        const userMsg = {
            role: 'user',
            content: this.escapeHtml(text),
            timestamp: new Date().toISOString()
        };
        conv.messages.push(userMsg);

        // Update title if first message
        if (conv.messages.length === 1) {
            conv.title = text.substring(0, 40) + (text.length > 40 ? '...' : '');
            this.updateChatTitle(conv.title);
        }

        conv.updatedAt = new Date().toISOString();
        this.saveConversations();

        // Clear input
        this.messageInput.value = '';
        this.messageInput.style.height = 'auto';

        // Render messages
        this.renderMessages();
        this.renderConversationsList();

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate AI response delay
        await this.delay(800 + Math.random() * 700);

        // Get AI response (now returns structured object)
        const response = window.findResponse(text);

        // Add assistant message with full response object
        const assistantMsg = {
            role: 'assistant',
            content: response,
            timestamp: new Date().toISOString()
        };
        conv.messages.push(assistantMsg);
        conv.updatedAt = new Date().toISOString();
        this.saveConversations();

        // Remove typing indicator and render
        this.renderMessages();
        // Quick reply events are handled via event delegation
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message assistant';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <img src="logo.png" alt="Iron Lady AI" class="message-avatar-img">
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span class="typing-indicator-text">Iron Lady is typing</span>
                    <div class="typing-dots">
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                    </div>
                </div>
            </div>
        `;
        this.messagesWrapper.appendChild(typingDiv);
        this.scrollToBottom();
    }

    // Utilities
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;

        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
        if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
        if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    formatTime(dateString) {
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    window.chatApp = new ChatApp();
});
