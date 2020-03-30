class GitHub {
    constructor() {
        this.client_id = '1fe5706b55a0031c5184';
        this.client_secret = '670623a8bc980cd923b9037c43dd6836e94d5ea2';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client secret${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client secret${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            // Same as profile: profile
            profile,
            repos
        }
    }
}