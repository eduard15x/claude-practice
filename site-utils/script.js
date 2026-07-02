const searchInput = document.getElementById('searchInput');
const termsContainer = document.querySelector('.terms-container');

// Sample AI terms (you can add more)
const aiTerms = [
    {
        title: 'Artificial Intelligence (AI)',
        definition: 'The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.',
        example: 'ChatGPT, image recognition software, and recommendation algorithms are examples of AI.'
    },
    {
        title: 'Machine Learning (ML)',
        definition: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
        example: 'Spam filters that learn from user feedback, or Netflix recommendations based on viewing history.'
    },
    {
        title: 'Deep Learning',
        definition: 'A subset of machine learning using neural networks with multiple layers (deep) to learn representations of data.',
        example: 'Convolutional neural networks (CNNs) for image recognition, or transformers for natural language processing.'
    },
    {
        title: 'Neural Network',
        definition: 'A computing system inspired by biological neural networks in animal brains, consisting of interconnected nodes.',
        example: 'The architecture behind language models like GPT or image generation models like DALL-E.'
    },
    {
        title: 'Natural Language Processing (NLP)',
        definition: 'A branch of AI focused on enabling computers to understand, interpret, and generate human language.',
        example: 'Chatbots, translation services (Google Translate), and sentiment analysis tools.'
    }
];

function renderTerms(terms) {
    termsContainer.innerHTML = '';
    if (terms.length === 0) {
        termsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #6b7280;">No terms found</p>';
        return;
    }
    terms.forEach(term => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <h3 class="term-title">${term.title}</h3>
            <p class="term-definition">${term.definition}</p>
            <p class="term-example"><strong>Example:</strong> ${term.example}</p>
        `;
        termsContainer.appendChild(card);
    });
}

function filterTerms(query) {
    const lowerQuery = query.toLowerCase();
    return aiTerms.filter(term =>
        term.title.toLowerCase().includes(lowerQuery) ||
        term.definition.toLowerCase().includes(lowerQuery)
    );
}

searchInput.addEventListener('input', (e) => {
    const filtered = filterTerms(e.target.value);
    renderTerms(filtered);
});

// Initial render
renderTerms(aiTerms);
