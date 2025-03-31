cd ~/core
git pull
npm ci
# npx prisma migrate deploy # - For prisma
npm run build
npx pm2 reload all
