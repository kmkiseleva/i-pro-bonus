export const auth = async () => {
  const response = await fetch(`${import.meta.env.VITE_CREATE_TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      AccessKey: `${import.meta.env.VITE_ACCESS_KEY}`,
    },
    body: JSON.stringify({
      idClient: `${import.meta.env.VITE_ClIENT_ID}`,
      accessToken: '',
      paramName: 'device',
      paramValue: `${import.meta.env.VITE_DEVICE_ID}`,
      latitude: 0,
      longitude: 0,
      sourceQuery: 0,
    }),
  });

  return response;
};
