# 🤖 Misonote MCP Client

[![npm version](https://badge.fury.io/js/misonote-mcp.svg)](https://www.npmjs.com/package/misonote-mcp)
[![npm downloads](https://img.shields.io/npm/dm/misonote-mcp.svg)](https://www.npmjs.com/package/misonote-mcp)
[![Smithery](https://img.shields.io/badge/Smithery-Available-blue)](https://smithery.ai/server/@leeguooooo/misonote-mcp-client)

> MCP (Model Context Protocol) 客户端，用于将 Misonote Markdown 文档系统与 Cursor 编辑器深度集成

**🎉 现已发布到多个平台！** 推荐通过 [Smithery.ai](https://smithery.ai/server/@leeguooooo/misonote-mcp-client) 一键安装，或使用 `npm install -g misonote-mcp` 全局安装。

## ✨ 功能特性

### **文档管理**
- **创建文档** - 通过自然语言创建 Markdown 文档
- **读取文档** - 获取文档内容和元数据
- **更新文档** - 修改现有文档内容
- **删除文档** - 安全删除文档
- **文档列表** - 浏览所有可用文档

### 🔍 **智能搜索**
- **全文搜索** - 搜索文档内容、标题和路径
- **相关性评分** - 智能排序搜索结果
- **文本片段** - 显示匹配的文本摘要

### 🧠 **记忆系统**
- **习惯记录** (habits) - 记录用户的工作习惯
- **偏好管理** (preferences) - 保存用户的技术偏好
- **复盘记录** (retrospectives) - 记录经验教训
- **洞察学习** (insights) - 保存学习心得
- **多项目支持** - 为不同项目维护独立记忆

### 🔗 **地址生成**
- **自动地址** - 创建文档时自动生成访问链接
- **便于分享** - 一键获取文档分享地址

> 需要跟 https://github.com/leeguooooo/misonote-markdown 文档平台项目一起使用

## 🚀 快速开始

### 1. 安装

#### 方法一：Smithery.ai 一键安装（推荐）

**🔗 Smithery 地址**: [https://smithery.ai/server/@leeguooooo/misonote-mcp-client](https://smithery.ai/server/@leeguooooo/misonote-mcp-client)

通过 Smithery.ai 可以一键安装和配置 MCP 服务器，无需手动配置，是最简单快捷的安装方式。

#### 方法二：NPM 全局安装

**📦 NPM 包地址**: [https://www.npmjs.com/package/misonote-mcp](https://www.npmjs.com/package/misonote-mcp)

```bash
# 使用 npm
npm install -g misonote-mcp

# 使用 pnpm
pnpm add -g misonote-mcp

# 使用 yarn
yarn global add misonote-mcp
```

安装完成后，您可以直接在 Cursor 中使用 `misonote-mcp` 命令。

#### 方法三：本地开发安装

```bash
# 克隆项目
git clone https://github.com/leeguooooo/misonote-mcp-client.git
cd misonote-mcp-client

# 安装依赖
npm install
```

### 2. 配置 Cursor

#### Smithery.ai 安装后的配置（推荐）

如果您使用 Smithery.ai 安装，配置会自动完成，无需手动配置！

#### NPM 全局安装后的配置

在 Cursor 设置中添加 MCP 服务器配置：

```json
{
  "mcpServers": {
    "misonote-markdown": {
      "command": "misonote-mcp",
      "env": {
        "MCP_SERVER_URL": "http://localhost:3001",
        "MCP_API_KEY": "your-api-key"
      }
    }
  }
}
```

> 💡 **提示**: 使用 NPM 全局安装后，无需指定完整路径，直接使用 `misonote-mcp` 命令即可。

#### 本地开发配置

```json
{
  "mcpServers": {
    "misonote-markdown": {
      "command": "node",
      "args": ["/absolute/path/to/misonote-mcp-client/misonote-mcp-client.js"],
      "env": {
        "MCP_SERVER_URL": "http://localhost:3001",
        "MCP_API_KEY": "your-api-key"
      }
    }
  }
}
```

### 3. 获取 API 密钥

从 Misonote Markdown 服务器获取 API 密钥：

```bash
# 如果使用 Docker
docker logs misonote-markdown | grep "MCP_API_KEY"

# 如果使用开发模式
cat .env | grep MCP_API_KEY
```

## 🛠️ 环境变量

| 变量名 | 描述 | 默认值 |
|--------|------|--------|
| `MCP_SERVER_URL` | Misonote Markdown 服务器地址 | `http://localhost:3001` |
| `MCP_API_KEY` | API 认证密钥 | 必需 |
| `DEBUG` | 调试模式 | `false` |
| `TIMEOUT` | 请求超时时间（毫秒） | `15000` |

## 🎯 使用示例

### 创建文档
```
用户: "帮我创建一个 API 文档"
AI: 文档创建成功！
    在线地址: http://localhost:3001/docs/api-guide
    📖 点击地址即可查看文档
```

### 搜索文档
```
用户: "搜索所有关于部署的文档"
AI: 🔍 找到 3 个相关文档:
    1. deployment-guide.md - 相关性: 9/10
       在线地址: http://localhost:3001/docs/deployment-guide
    ...
```

### 记录习惯
```
用户: "我习惯在每个函数前写 JSDoc 注释"
AI: "好的，我已经记录了您的编程习惯，以后会在代码示例中包含详细的 JSDoc 注释"
```

## 🔧 技术实现

### MCP 协议支持
- 完整的 MCP 1.0 协议实现
- 支持工具调用和资源访问
- 错误处理和重试机制

### HTTP API 通信
- RESTful API 接口
- JWT 认证支持
- 请求/响应日志记录

### 工具列表

| 工具名 | 描述 |
|--------|------|
| `list_documents` | 获取文档列表 |
| `get_document` | 获取单个文档内容 |
| `create_document` | 创建新文档 |
| `update_document` | 更新现有文档 |
| `delete_document` | 删除文档 |
| `search_documents` | 搜索文档 |
| `get_document_url` | 获取文档访问地址 |
| `add_memory` | 添加记忆记录 |
| `get_memories` | 获取记忆内容 |
| `search_memories` | 搜索记忆记录 |
| `list_memory_projects` | 列出记忆项目 |

## 📦 包信息

### Smithery.ai 集成（推荐）
- **Smithery 地址**: [https://smithery.ai/server/@leeguooooo/misonote-mcp-client](https://smithery.ai/server/@leeguooooo/misonote-mcp-client)
- **一键安装**: 支持通过 Smithery.ai 平台一键安装和配置
- **自动配置**: 无需手动配置 Cursor 设置

### NPM 包详情
- **包名**: `misonote-mcp`
- **版本**: `1.0.0`
- **NPM 地址**: [https://www.npmjs.com/package/misonote-mcp](https://www.npmjs.com/package/misonote-mcp)
- **仓库地址**: [https://github.com/leeguooooo/misonote-mcp-client](https://github.com/leeguooooo/misonote-mcp-client)

### 安装统计
```bash
# 查看包信息
npm info misonote-mcp

# 查看版本历史
npm view misonote-mcp versions --json
```

### 更新包
```bash
# 检查更新
npm outdated -g misonote-mcp

# 更新到最新版本
npm update -g misonote-mcp
```

## �🔗 相关项目

- **Smithery.ai**: [misonote-mcp-client](https://smithery.ai/server/@leeguooooo/misonote-mcp-client) - 一键安装
- **NPM 包**: [misonote-mcp](https://www.npmjs.com/package/misonote-mcp) - 全局安装
- **主项目**: [misonote-markdown](https://github.com/leeguooooo/misonote-markdown) - 文档服务器
- **Docker 镜像**: [leeguo/misonote-markdown](https://hub.docker.com/r/leeguo/misonote-markdown) - 容器部署

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**让 AI 成为您的智能文档助手！** 🚀
