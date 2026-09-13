class AutoComplete {
    constructor() {
        this.timer = null;
        this.delay = 300;
        this.lastInputTime = 0;
    }
    async fetchSuggestions(query) {
        console.log(`Searching for: "${query}"`);

        await new Promise(resolve => setTimeout(resolve, 500));

        return [
            `${query} apple`,
            `${query} banana`,
            `${query} orange`
        ];
    }
    handleInput(query) {
        query = query.trim();

        if (this.timer) {
            clearTimeout(this.timer);
        }

        if (query.length === 0) {
            console.log("Suggestions cleared");
            return;
        }

        const currentTime = Date.now();
        const timeDifference = currentTime - this.lastInputTime;

        if (timeDifference < 200) {
            this.delay = Math.min(this.delay + 100, 1000);
        } else {
            this.delay = Math.max(this.delay - 50, 200);
        }

        console.log(`Debounce delay: ${this.delay}ms`);

        this.timer = setTimeout(async () => {
            this.lastInputTime = Date.now();

            const suggestions = await this.fetchSuggestions(query);

            console.log("Suggestions:", suggestions);
        }, this.delay);
    }
}

const autoComplete = new AutoComplete();

autoComplete.handleInput("j");
autoComplete.handleInput("ja");
autoComplete.handleInput("jav");
autoComplete.handleInput("java");
