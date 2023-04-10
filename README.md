# ТЗ iProBonus для компании ProgressTerra

SPA, которая содержит компонент для получения бонусов авторизованного пользователя. Макет страницы расположен по адресу: https://www.figma.com/file/JlvPVIra9SDFMS1kNODMjL/Untitled?node-id=0%3A1

## Установка

- Склонируйте репозиторий
- Установите зависимости

```
npm install
```

или

```
yarn
```

- Создайте файл .env в корневой папке проекта и заполните его необходимыми параметрами. Вместо звездочек использовать точки доступа.

```
VITE_CREATE_TOKEN=***/api/v3/clients/accesstoken
VITE_GET_BONUS=***/api/v3/ibonus/generalinfo
VITE_ACCESS_KEY=your_access_key
VITE_ClIENT_ID=your_client_id
VITE_DEVICE_ID=your_device_id
```

- Запустите dev сервер

```
npm run dev
```

или

```
yarn dev
```

## Используемые технологии

- React
- TypeScript
- MobX
- Sass
- CSS-Modules, БЭМ
- Eslint
- Prettier
- Vite

## Author

**Ksenia Kiseleva:** https://github.com/kmkiseleva
