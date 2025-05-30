# 🤖 Misonote MCP Client

> MCP (Model Context Protocol) 客户端，用于将 Misonote Markdown 文档系统与 Cursor 编辑器深度集成

## ✨ 功能特性

### �� **文档管理**
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

## 🚀 快速开始

### 1. 安装

#### 方法一：全局安装（推荐）

```bash
# 使用 npm
npm install -g misonote-mcp

# 使用 pnpm
pnpm add -g misonote-mcp

# 使用 yarn
yarn global add misonote-mcp
```

#### 方法二：本地克隆

```bash
# 克隆项目
git clone https://github.com/leeguooooo/misonote-mcp-client.git
cd misonote-mcp-client

# 安装依赖
npm install
```

### 2. 配置 Cursor

#### 全局安装后的配置

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

#### 本地克隆后的配置

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

## 🔗 相关项目

- **主项目**: [misonote-markdown](https://github.com/leeguooooo/misonote-markdown)
- **Docker 镜像**: [leeguo/misonote-markdown](https://hub.docker.com/r/leeguo/misonote-markdown)

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**让 AI 成为您的智能文档助手！** 🚀
