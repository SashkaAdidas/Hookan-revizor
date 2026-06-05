// supabase.js - Подключение к Supabase
const SUPABASE_URL = 'https://ritkzxaofsqbycleydva.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_to-AjKtdqQmUd1YcP7aHxA_-hx5Ybis';

class SupabaseClient {
    constructor() {
        this.url = SUPABASE_URL;
        this.key = SUPABASE_ANON_KEY;
    }
    
    async getReviews(loungeId) {
        try {
            const response = await fetch(
                `${this.url}/rest/v1/reviews?lounge_id=eq.${loungeId}&select=*&order=created_at.desc`,
                {
                    headers: {
                        'apikey': this.key,
                        'Authorization': `Bearer ${this.key}`,
                        'Prefer': 'count=exact'
                    }
                }
            );
            const data = await response.json();
            return data || [];
        } catch (error) {
            console.error('Ошибка получения отзывов:', error);
            return [];
        }
    }
    
    async addReview(loungeId, rating, text) {
        try {
            const response = await fetch(
                `${this.url}/rest/v1/reviews`,
                {
                    method: 'POST',
                    headers: {
                        'apikey': this.key,
                        'Authorization': `Bearer ${this.key}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=representation'
                    },
                    body: JSON.stringify({
                        lounge_id: loungeId,
                        rating: rating,
                        text: text,
                        user_ip: this.getUniqueUserId()
                    })
                }
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Ошибка добавления отзыва:', error);
            return null;
        }
    }
    
    getUniqueUserId() {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('userId', userId);
        }
        return userId;
    }
}

// Экспорт клиент
const supabase = new SupabaseClient();