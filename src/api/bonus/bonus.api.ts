export const fetchBonus = async () => {
  let accessToken;

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) {
      accessToken = JSON.parse(token).access_token;
    }
  }

  const response = await fetch(`${import.meta.env.VITE_GET_BONUS}/${accessToken}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      AccessKey: `${import.meta.env.VITE_ACCESS_KEY}`,
    },
  });

  return response;
};
