# React App Deployment on Claw.Cloud Run

This guide helps you containerize your React application using Docker and deploy it to [Claw.Cloud Run](https://run.claw.cloud).

---

## 🧱 Step 1: Create `Dockerfile`

Create a file named `Dockerfile` in the root of your React project:

```Dockerfile
# Use official Node.js image as the build environment
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies and build the React app
RUN npm install && npm run build

# Use a simple web server to serve the build (e.g., serve)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy build output from previous stage
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Run the app with serve
CMD ["serve", "-l", "80"]
```

---

## 🧾 Step 2: Create `.dockerignore`

Create a `.dockerignore` file to prevent unnecessary files from being copied into the image:

```txt
node_modules
dist
.git
Dockerfile
docker-compose.yml
```

---

## 🛠 Step 3: Build & Push to Docker Hub

> 🔐 **Make sure you're logged in to Docker Hub first.**

```bash
docker login
```

Then build and push your image (replace `your_repository_name` with your Docker Hub username):

```bash
docker buildx create --use
docker buildx build --platform linux/amd64 -t your_repository_name/iscg7444-react:latest --push .
```

---

## 🚀 Step 4: Deploy to Claw.Cloud Run

1. Visit [https://run.claw.cloud](https://run.claw.cloud)
2. Click **Create App**
3. Use this image:
   ```
   docker.io/your_repository_name/iscg7444-react:latest
   ```
4. Set **Port** to `3000`
5. Set **Resource Limits**:
   - CPU: `0.1`
   - Memory: `128Mi`
6. Click **Deploy**

---

## ✅ Step 5: Confirm the Deployment

Once deployed, you’ll receive a public URL — open it in your browser to access your live React app.

---

## 🧠 Notes

- Make sure your React app builds to `/dist` (default for Vite).
- If using Create React App, change `/dist` to `/build` in Dockerfile accordingly.

---

## 🧩 Example Project Structure

```
iscg7444-react/
├── Dockerfile
├── .dockerignore
├── package.json
├── public/
├── src/
└── ...
```

---

## 🔐 Docker Hub Access

If you're using a **private repository**, you need to:
- Log in to Docker Hub inside Claw.Cloud Run dashboard
- Add a **registry secret** if needed

---

## 💬 Help

Contact your instructor if anything is unclear, or refer to Docker & Claw.Cloud documentation.

---
