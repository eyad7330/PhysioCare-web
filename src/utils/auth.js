// 🔴 حذف كل شيء يتعلق بتخزين JWT في localStorage
// التوكن سيُحفظ تلقائيًا في الكوكيز من الـ Backend

// مثال لطلب مصادق عليه
export const fetchWithAuth = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    credentials: 'include' // 🔴 إرسال الكوكيز تلقائيًا
  });
  
  if (!response.ok) throw new Error('Request failed');
  return response.json();
};
