# MCP 客户端错误调试指南

## 概述

我们已经大幅改进了 MCP 客户端的错误处理和调试功能，现在你可以看到详细的错误信息，包括：

- HTTP 状态码和状态文本
- 服务器响应数据
- API Key 状态
- 具体的解决建议
- 请求和响应的调试日志

## 新增的调试功能

### 1. 详细的错误信息

现在所有错误都会显示：
```
🔍 详细信息:
• HTTP 状态码: 403
• 状态文本: Forbidden
• 服务器地址: http://localhost:3000
• 错误详情: API Key 权限不足

💡 解决建议: API Key 权限不足
   请确保 API Key 具有执行此操作的权限
```

### 2. 请求/响应拦截器

客户端现在会在控制台输出：
```
[MCP DEBUG] 请求: GET http://localhost:3000/api/mcp/documents
[MCP DEBUG] API Key: sk-1234...
[MCP DEBUG] 响应成功: 200 OK
```

或者在出错时：
```
[MCP DEBUG] 响应错误详情:
[MCP DEBUG] - 状态码: 403
[MCP DEBUG] - 状态文本: Forbidden
[MCP DEBUG] - 错误消息: Request failed with status code 403
[MCP DEBUG] - 服务器地址: http://localhost:3000
[MCP DEBUG] - 响应数据: {"error": "API Key 权限不足"}
```

### 3. 启动时环境检查

客户端启动时会显示：
```
🔍 MCP 客户端环境检查:
📍 服务器地址: http://localhost:3000
🔑 API Key: 已设置 (sk-1234...)
🌐 Node.js 版本: v18.17.0
📦 工作目录: /path/to/project
```

## 常见错误及解决方案

### 1. API Key 相关错误

**错误**: `MCP_API_KEY 环境变量未设置`
**解决**: 在 Cursor 的 MCP 配置中设置 API Key：
```json
{
  "mcpServers": {
    "misonote": {
      "command": "node",
      "args": ["misonote-mcp-client.js"],
      "env": {
        "MCP_API_KEY": "your-api-key-here",
        "MCP_SERVER_URL": "http://localhost:3000"
      }
    }
  }
}
```

**错误**: `HTTP 状态码: 401` 或 `HTTP 状态码: 403`
**解决**: 
- 检查 API Key 是否正确
- 确认 API Key 是否有足够权限
- 检查 API Key 是否已过期

### 2. 连接相关错误

**错误**: `ECONNREFUSED`
**解决**:
1. 确认服务器正在运行：`pnpm dev`
2. 检查服务器地址是否正确
3. 确认端口没有被占用

**错误**: `ETIMEDOUT`
**解决**:
- 检查网络连接
- 确认服务器响应正常
- 可能需要增加超时时间

### 3. 服务器错误

**错误**: `HTTP 状态码: 500`
**解决**:
- 检查服务器日志
- 确认数据库连接正常
- 检查服务器配置

## 调试步骤

1. **查看启动日志**: 检查环境变量是否正确设置
2. **查看请求日志**: 确认请求是否发送到正确的地址
3. **查看响应日志**: 分析服务器返回的具体错误信息
4. **根据建议操作**: 按照错误信息中的建议进行修复

## 测试错误处理

运行测试脚本来验证错误处理：
```bash
node misonote-mcp-client/test-error-handling.js
```

这将模拟各种错误情况并显示相应的错误信息。
