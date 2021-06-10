export default class DbService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getCard() {
        return await this.getResource('/Cards/');
    }

    async getSocialMediaChart() {
        return await this.getResource('/SocialMediaChart/');
    }

    async getMonitoringChart() {
        return await this.getResource('/MonitoringChart/');
    }

    async getSignatureBarChart() {
        return await this.getResource('/SignatureBarChart/');
    }

    async getSignaturePieChart() {
        return await this.getResource('/SignaturePieChart/');
    }
}
