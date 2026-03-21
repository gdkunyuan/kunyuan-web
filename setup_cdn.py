#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
"""腾讯云 CDN 自动开通脚本 - 使用 tccli"""

import subprocess
import json

# 配置信息
CDN_DOMAIN = "kunyuan-1257542161.cos.ap-guangzhou.myqcloud.com"
BUCKET_NAME = "kunyuan-1257542161"
BUCKET_REGION = "ap-guangzhou"

def add_domain():
    """使用 tccli 添加 CDN 域名"""
    try:
        # 构建 Origin JSON
        origin_config = json.dumps({
            "Origins": [f"{BUCKET_NAME}.cos.{BUCKET_REGION}.myqcloud.com"],
            "OriginType": "cos",
            "OriginPullProtocol": "http"
        })

        cmd = [
            "tccli", "cdn", "AddCdnDomain",
            "--version", "2018-06-06",
            "--region", "ap-guangzhou",
            "--Domain", CDN_DOMAIN,
            "--Type", "cos",
            "--Area", "mainland",
            "--ServiceType", "web",
            "--Origin", origin_config
        ]

        print(f"正在添加 CDN 域名: {CDN_DOMAIN}...")
        print(f"源站: {BUCKET_NAME}.cos.{BUCKET_REGION}.myqcloud.com")

        result = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8')

        if result.returncode == 0:
            output = json.loads(result.stdout)
            if "DomainId" in output or "Cname" in output:
                print(f"CDN 域名添加成功！")
                print(f"   域名ID: {output.get('DomainId', 'N/A')}")
                print(f"   CNAME: {output.get('Cname', 'N/A')}")
                return output.get('DomainId'), output.get('Cname')
            else:
                print(f"返回结果: {result.stdout}")
                return None, None
        else:
            print(f"执行失败:")
            print(f"   错误: {result.stderr}")
            return None, None

    except Exception as e:
        print(f"未知错误: {e}")
        import traceback
        traceback.print_exc()
        return None, None

if __name__ == "__main__":
    print("=" * 50)
    print("腾讯云 CDN 自动开通脚本 (tccli)")
    print("=" * 50)

    # 添加域名
    domain_id, cname = add_domain()

    if domain_id:
        print(f"\n" + "=" * 50)
        print(f"CDN 开通完成！")
        print(f"=" * 50)
        print(f"\n访问地址: http://{CDN_DOMAIN}")
        print(f"\n注意:")
        print(f"   1. CDN 生效需 5-10 分钟")
        print(f"   2. 如需绑定自定义域名，请配置 CNAME 指向: {cname}")
    else:
        print(f"\nCDN 开通失败，请前往控制台手动开通:")
        print(f"https://console.cloud.tencent.com/cdn")
