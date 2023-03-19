import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Test</h1>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}