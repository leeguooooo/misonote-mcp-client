# 🤖 Misonote MCP Client

[![npm version](https://badge.fury.io/js/misonote-mcp.svg)](https://www.npmjs.com/package/misonote-mcp)
[![npm downloads](https://img.shields.io/npm/dm/misonote-mcp.svg)](https://www.npmjs.com/package/misonote-mcp)
[![Smithery](https://img.shields.io/badge/Smithery-Available-blue)](https://smithery.ai/server/@leeguooooo/misonote-mcp-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **AI 原生的文档管理系统** - 通过 MCP 协议将 Misonote Markdown 与 Cursor 编辑器深度集成，让 AI 成为您的智能文档助手

## 🌟 核心特性

- **🤖 AI 原生设计** - 专为 AI 编辑器优化的文档管理体验
- **📝 智能文档操作** - 创建、编辑、搜索文档，一切通过自然语言完成
- **🧠 记忆系统** - AI 记住您的习惯、偏好和项目经验
- **🔍 智能搜索** - 全文搜索，相关性排序，智能摘要
- **🔗 即时分享** - 自动生成在线访问链接
- **⚡ 即插即用** - 支持 Smithery.ai 一键安装

## 📋 功能详情

| 功能模块 | 描述 | 支持的操作 |
|---------|------|-----------|
| **📝 文档管理** | 完整的文档生命周期管理 | 创建、读取、更新、删除、列表 |
| **🔍 智能搜索** | 全文搜索与智能排序 | 内容搜索、标题搜索、路径搜索 |
| **🧠 记忆系统** | AI 个性化记忆存储 | 习惯、偏好、复盘、洞察 |
| **🔗 链接生成** | 自动生成分享链接 | 在线访问、即时分享 |
| **🛠️ 服务器管理** | 服务器状态与能力查询 | 健康检查、能力查询 |

### 🧠 记忆系统详解

| 记忆类型 | 用途 | 示例 |
|---------|------|------|
| **habits** | 工作习惯记录 | "我习惯使用 TypeScript 而不是 JavaScript" |
| **preferences** | 技术偏好 | "我偏好使用 Tailwind CSS 进行样式设计" |
| **retrospectives** | 项目复盘 | "这次重构学到了组件设计的重要性" |
| **insights** | 学习洞察 | "发现使用 React Query 能大幅简化状态管理" |

> **依赖项目**: 需要配合 [misonote-markdown](https://github.com/leeguooooo/misonote-markdown) 文档服务器使用

## 🚀 快速开始

### 📦 安装方式

#### 🌟 方式一：Smithery.ai（推荐）

**一键安装，零配置！**

1. 访问 [Smithery.ai](https://smithery.ai/server/@leeguooooo/misonote-mcp-client)
2. 点击 "Install" 按钮
3. 自动配置完成，立即可用

#### 📦 方式二：NPM 全局安装

```bash
npm install -g misonote-mcp
```

#### 🛠️ 方式三：源码安装

```bash
git clone https://github.com/leeguooooo/misonote-mcp-client.git
cd misonote-mcp-client
npm install
```

### ⚙️ Cursor 配置

#### 🌟 Smithery.ai 用户

**无需配置！** 安装后自动生效。

#### 📦 NPM 全局安装用户

在 Cursor 设置中添加：

```json
{
  "mcpServers": {
    "misonote": {
      "command": "misonote-mcp",
      "env": {
        "MCP_SERVER_URL": "http://localhost:3000",
        "MCP_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

#### 🛠️ 源码安装用户

```json
{
  "mcpServers": {
    "misonote": {
      "command": "node",
      "args": ["/path/to/misonote-mcp-client/misonote-mcp-client.js"],
      "env": {
        "MCP_SERVER_URL": "http://localhost:3000",
        "MCP_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### 🔑 获取 API 密钥

在 Misonote Markdown 服务器管理界面中创建 API 密钥：

1. **启动服务器**
   ```bash
   # 本地开发
   pnpm dev

   # 或 Docker 部署
   docker run -p 3000:3000 leeguo/misonote-markdown
   ```

2. **访问管理界面**
   - 打开浏览器访问：`http://localhost:3000/admin`
   - 使用管理员账号登录

3. **创建 API 密钥**
   - 进入 "API 密钥管理" 页面
   - 点击 "创建新密钥" 按钮
   - 设置密钥名称（如：`MCP Client`）
   - 选择权限：建议选择 `read`, `write`, `mcp` 权限
   - 点击创建，复制生成的 API 密钥

4. **密钥格式**
   - API 密钥格式：`mcp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - 请妥善保存，密钥只显示一次

## 🎯 使用示例

### 📝 创建文档
```
👤 用户: "帮我创建一个 Next.js 部署指南"
🤖 AI: 文档创建成功！
     📄 路径: deployment/nextjs-guide
     🔗 在线地址: http://localhost:3000/docs/deployment/nextjs-guide
     📖 点击地址即可查看文档
```

### 🔍 智能搜索
```
👤 用户: "搜索所有关于 Docker 的文档"
🤖 AI: 🔍 找到 3 个相关文档:
     
     1. **docker-deployment.md** - 相关性: 9/10
        📄 路径: deployment/docker-deployment
        🔗 在线地址: http://localhost:3000/docs/deployment/docker-deployment
        📝 摘要: Docker 容器化部署完整指南...
     
     2. **docker-compose.md** - 相关性: 8/10
        📄 路径: infrastructure/docker-compose
        🔗 在线地址: http://localhost:3000/docs/infrastructure/docker-compose
```

### 🧠 记录习惯
```
👤 用户: "我习惯使用 TypeScript 而不是 JavaScript"
🤖 AI: 🧠 已记录您的编程习惯！
     以后在代码示例中我会优先使用 TypeScript
     
👤 用户: "我偏好使用 Tailwind CSS 进行样式设计"
🤖 AI: 🎨 已记录您的技术偏好！
     在样式相关的建议中我会推荐 Tailwind CSS 方案
```

## ⚙️ 环境变量

| 变量名 | 描述 | 默认值 | 必需 |
|--------|------|--------|------|
| `MCP_SERVER_URL` | Misonote 服务器地址 | `http://localhost:3000` | ✅ |
| `MCP_API_KEY` | API 认证密钥 | - | ✅ |

## 🔧 API 工具列表

### 📝 文档操作

| 工具名 | 功能 | 参数 |
|--------|------|------|
| `list_documents` | 获取文档列表 | `path?` |
| `get_document` | 获取文档内容 | `path` |
| `create_document` | 创建新文档 | `path`, `content`, `title?`, `metadata?` |
| `update_document` | 更新文档 | `path`, `content`, `title?`, `metadata?` |
| `delete_document` | 删除文档 | `path` |
| `search_documents` | 搜索文档 | `query`, `searchType?`, `path?` |
| `get_document_url` | 获取访问链接 | `path` |

### 🧠 记忆操作

| 工具名 | 功能 | 参数 |
|--------|------|------|
| `add_memory` | 添加记忆 | `type`, `content`, `project?`, `tags?` |
| `get_memories` | 获取记忆 | `project?`, `type?` |
| `search_memories` | 搜索记忆 | `query`, `project?`, `type?` |
| `list_memory_projects` | 列出项目 | - |

### 🛠️ 服务器操作

| 工具名 | 功能 | 参数 |
|--------|------|------|
| `get_server_info` | 获取服务器信息 | - |

## 🔗 相关链接

### 📦 安装平台

| 平台 | 链接 | 特点 |
|------|------|------|
| **Smithery.ai** | [misonote-mcp-client](https://smithery.ai/server/@leeguooooo/misonote-mcp-client) | 🌟 一键安装，零配置 |
| **NPM** | [misonote-mcp](https://www.npmjs.com/package/misonote-mcp) | 📦 全局安装，命令行使用 |
| **GitHub** | [misonote-mcp-client](https://github.com/leeguooooo/misonote-mcp-client) | 🛠️ 源码安装，开发调试 |

### 🔗 相关项目

| 项目 | 链接 | 描述 |
|------|------|------|
| **Misonote Markdown** | [GitHub](https://github.com/leeguooooo/misonote-markdown) | 📝 文档服务器主项目 |
| **Docker 镜像** | [Docker Hub](https://hub.docker.com/r/leeguo/misonote-markdown) | 🐳 容器化部署 |

## 🛠️ 维护与更新

```bash
# 检查版本
npm info misonote-mcp version

# 检查更新
npm outdated -g misonote-mcp

# 更新到最新版本
npm update -g misonote-mcp
```

## 🐛 故障排除

### 常见问题

1. **API Key 无效 (401 错误)**
   - 检查 API Key 是否正确复制（完整的 64 位字符）
   - 确认 API Key 格式正确（以 `mcp_` 开头）
   - 检查 API Key 是否已过期或被删除
   - 在管理界面重新创建 API Key

2. **权限不足 (403 错误)**
   - 确认 API Key 具有 `mcp` 权限
   - 建议权限设置：`read`, `write`, `mcp`
   - 如需管理功能，添加 `admin` 权限

3. **连接失败 (ECONNREFUSED)**
   - 检查 Misonote 服务器是否正在运行
   - 确认 `MCP_SERVER_URL` 地址和端口正确
   - 默认端口通常是 3000 或 3002

4. **找不到管理界面**
   - 确认访问地址：`http://localhost:3000/admin`
   - 检查是否已创建管理员账号
   - 查看服务器启动日志获取正确端口

### 调试模式

MCP 客户端内置详细的错误处理和调试信息，出现问题时会显示：
- HTTP 状态码和错误信息
- 具体的解决建议
- 请求和响应的调试日志

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

---

<div align="center">

**🤖 让 AI 成为您的智能文档助手！**

[![Smithery](https://img.shields.io/badge/Install%20via-Smithery.ai-blue?style=for-the-badge)](https://smithery.ai/server/@leeguooooo/misonote-mcp-client)
[![NPM](https://img.shields.io/badge/Install%20via-NPM-red?style=for-the-badge)](https://www.npmjs.com/package/misonote-mcp)

</div>
