// supabase.js - Подключение к Supabase
const SUPABASE_URL = 'https://ritkzxaofsqbycleydva.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_to-AjKtdqQmUd1YcP7aHxA_-hx5Ybis';

class SupabaseClient {
    constructor() {
        this.url = SUPABASE_URL;
        this.key = SUPABASE_ANON_KEY;
    }
    
    async getReviews(loungeId) {
        let reviews = [];
        
        // Сначала пробуем загрузить из Supabase
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
            
            if (response.ok) {
                const data = await response.json();
                reviews = data || [];
                console.log('✅ Загружено из Supabase:', reviews.length);
            }
        } catch (error) {
            console.log('⚠️ Supabase недоступен, загружаем из localStorage');
        }
        
        // Добавляем локальные отзывы
        const localReviews = JSON.parse(localStorage.getItem('localReviews') || '[]');
        const loungeLocalReviews = localReviews.filter(r => r.lounge_id === loungeId);
        
        console.log('📦 Локальных отзывов:', loungeLocalReviews.length);
        
        // Объединяем (локальные добавляем в конец)
        return [...reviews, ...loungeLocalReviews];
    }
    
    async addReview(loungeId, rating, text) {
        const url = `${this.url}/rest/v1/reviews`;
        console.log('🚀 Отправка запроса к Supabase:', url);
        console.log('📝 Данные:', { lounge_id: loungeId, rating, text });
        
        const body = JSON.stringify({
            lounge_id: loungeId,
            rating: rating,
            text: text,
            user_ip: this.getUniqueUserId()
        });
        
        console.log('📦 Тело запроса:', body);
        console.log('🔑 Ключ:', this.key.substring(0, 10) + '...');
        
        let response;
        try {
            console.log('⏳ Отправка fetch...');
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'apikey': this.key,
                    'Authorization': `Bearer ${this.key}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: body
            });
            console.log('✅ fetch вернул ответ');
        } catch (e) {
            console.error('❌ Ошибка fetch:', e);
            console.error('❌ Тип:', e.name);
            console.error('❌ Сообщение:', e.message);
            // Сохраняем в localStorage как fallback
            console.log('💾 Сохраняем отзыв в localStorage...');
            this.saveToLocal(loungeId, rating, text);
            return true;
        }
        
        if (!response) {
            console.error('❌ response null');
            return null;
        }
        
        console.log('📡 Статус:', response.status, response.statusText);
        console.log('📡 OK?', response.ok);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Ошибка Supabase:', errorText);
            // Сохраняем в localStorage как fallback
            console.log('💾 Сохраняем отзыв в localStorage...');
            this.saveToLocal(loungeId, rating, text);
            return true;
        }
        
        const data = await response.json();
        console.log('✅ Отзыв успешно добавлен:', data);
        return data;
    }
    
    saveToLocal(loungeId, rating, text) {
        const reviews = JSON.parse(localStorage.getItem('localReviews') || '[]');
        reviews.push({
            id: Date.now(), // Уникальный ID
            lounge_id: loungeId,
            rating: rating,
            text: text,
            user_ip: this.getUniqueUserId(),
            created_at: new Date().toISOString()
        });
        localStorage.setItem('localReviews', JSON.stringify(reviews));
        console.log('✅ Отзыв сохранён в localStorage:', reviews.length);
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
window.supabase = supabase;