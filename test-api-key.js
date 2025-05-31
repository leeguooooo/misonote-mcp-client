#!/usr/bin/env node

/**
 * 测试 API Key 是否有效
 */

const axios = require('axios');

const API_KEY = process.env.MCP_API_KEY || 'mcp_cfcb6ed1cb9a0e9abeb0eaeb65394f8ef58f30f9504fd16bfb2218c92a4a60bc';
const SERVER_URL = process.env.MCP_SERVER_URL || 'http://localhost:3000';

async function testApiKey() {
  console.log('🧪 测试 API Key 有效性\n');
  console.log(`📍 服务器地址: ${SERVER_URL}`);
  console.log(`🔑 API Key: ${API_KEY.substring(0, 12)}...\n`);

  const client = axios.create({
    baseURL: SERVER_URL,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'User-Agent': 'misonote-mcp-test/1.0.0'
    },
    timeout: 10000
  });

  // 测试 1: 健康检查
  console.log('1️⃣ 测试服务器健康状态...');
  try {
    const response = await client.get('/api/health');
    console.log('✅ 服务器健康检查通过');
    console.log(`   状态: ${response.data.status}`);
    console.log(`   响应时间: ${response.data.responseTime}ms\n`);
  } catch (error) {
    console.log('❌ 服务器健康检查失败');
    console.log(`   错误: ${error.message}\n`);
  }

  // 测试 2: MCP 能力检查
  console.log('2️⃣ 测试 MCP 能力接口...');
  try {
    const response = await client.get('/api/mcp/capabilities');
    console.log('✅ MCP 能力接口访问成功');
    console.log(`   服务器名称: ${response.data.data.server.name}`);
    console.log(`   服务器版本: ${response.data.data.server.version}\n`);
  } catch (error) {
    console.log('❌ MCP 能力接口访问失败');
    if (error.response) {
      console.log(`   HTTP 状态码: ${error.response.status}`);
      console.log(`   错误信息: ${error.response.data?.error || error.response.statusText}`);
    } else {
      console.log(`   错误: ${error.message}`);
    }
    console.log('');
  }

  // 测试 3: 文档列表接口
  console.log('3️⃣ 测试文档列表接口...');
  try {
    const response = await client.get('/api/mcp/documents');
    console.log('✅ 文档列表接口访问成功');
    const documents = response.data.data.documents || [];
    console.log(`   找到 ${documents.length} 个文档\n`);
  } catch (error) {
    console.log('❌ 文档列表接口访问失败');
    if (error.response) {
      console.log(`   HTTP 状态码: ${error.response.status}`);
      console.log(`   错误信息: ${error.response.data?.error || error.response.statusText}`);
      
      if (error.response.status === 401) {
        console.log('   💡 建议: API Key 可能无效或已过期');
      } else if (error.response.status === 403) {
        console.log('   💡 建议: API Key 可能没有足够的权限');
      }
    } else {
      console.log(`   错误: ${error.message}`);
    }
    console.log('');
  }

  // 测试 4: API Key 信息
  console.log('4️⃣ 测试 API Key 信息...');
  try {
    const response = await client.get('/api/admin/api-keys');
    console.log('✅ API Key 信息获取成功');
    console.log(`   API Key 数量: ${response.data.data?.length || 0}\n`);
  } catch (error) {
    console.log('❌ API Key 信息获取失败');
    if (error.response) {
      console.log(`   HTTP 状态码: ${error.response.status}`);
      console.log(`   错误信息: ${error.response.data?.error || error.response.statusText}`);
    } else {
      console.log(`   错误: ${error.message}`);
    }
    console.log('');
  }

  console.log('🏁 API Key 测试完成');
}

if (require.main === module) {
  testApiKey().catch(console.error);
}

module.exports = { testApiKey };
