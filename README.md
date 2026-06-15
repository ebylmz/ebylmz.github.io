# 🧠 Emirkan Burak Yilmaz — Portfolio

Welcome to my personal portfolio website! This site showcases my background, projects, publications, and experience in the field of computer science.

🔗 **Live Demo**: [ebylmz.github.io](https://ebylmz.github.io)


<div align="center">
    <img src="public/assets/ui.png" width="800"/>
</div>



## 🛠️ Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)


## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm 10 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ebylmz/ebylmz.github.io.git

# 2. Move into the project directory
cd ebylmz.github.io

# 3. Create the environment with Node.js from the conda-forge channel
conda create -n my-website -c conda-forge nodejs -y

# 4. Activate your new environment
conda activate my-website

# 5. Install dependencies
npm install

# 6. Start the local development server
npm run dev
```


### 📦 Deployment
```bash
npm run build
npm run deploy
```

Make sure your vite.config.js contains your base path:
```python
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```


## 📜 License
This project is open-source and free to use. If you find it helpful or inspiring, feel free to star, fork or contribute!