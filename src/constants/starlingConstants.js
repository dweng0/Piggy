
export const token = "UaAPFFPjA43GUVuXoWS50Vozu57ngtUAGzSAsWWyrhTdey3XbXZSF1Y8s6519bri";
export const oAuthUrl = "https://oauth-sandbox.starlingbank.com/?client_id=ghwzS1Y22gayTgjYZFki&response_type=code&state=r4nD0mStr1ng&redirect_uri=http://localhost:3000/"

export const mocks = {
    transactions:{
        "_links": {
            "nextPage": {
                "href": "NOT_YET_IMPLEMENTED"
            }
        },
        "_embedded": {
            "transactions": [
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7b3e94f8-3970-1e43-1da8-8273e1815476",
                            "templated": false
                        }
                    },
                    "id": "7b3e94f8-3970-1e43-1da8-8273e1815476",
                    "currency": "GBP",
                    "amount": -15.69,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.593Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 13374.43
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7b3e145f-7d92-8ce4-9f09-06aac032b347",
                            "templated": false
                        }
                    },
                    "id": "7b3e145f-7d92-8ce4-9f09-06aac032b347",
                    "currency": "GBP",
                    "amount": -36.12,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.516Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 13390.12
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7b3efe3e-662d-41e5-7c0c-ee65d040c6c8",
                            "templated": false
                        }
                    },
                    "id": "7b3efe3e-662d-41e5-7c0c-ee65d040c6c8",
                    "currency": "GBP",
                    "amount": -19.94,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.502Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 13426.24
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e4c44-1a30-2cf9-2a1f-51244043735e",
                            "templated": false
                        }
                    },
                    "id": "7b3e4c44-1a30-2cf9-2a1f-51244043735e",
                    "currency": "GBP",
                    "amount": -25.08,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.487Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13446.18
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e786b-35fd-f771-0609-77f7fc309825",
                            "templated": false
                        }
                    },
                    "id": "7b3e786b-35fd-f771-0609-77f7fc309825",
                    "currency": "GBP",
                    "amount": -22.24,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.485Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13471.26
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7b3eb6b1-e767-4fe5-7452-0777f9f0d00c",
                            "templated": false
                        }
                    },
                    "id": "7b3eb6b1-e767-4fe5-7452-0777f9f0d00c",
                    "currency": "GBP",
                    "amount": -8.65,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.474Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 13493.5
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7b3eaffd-2e1c-583b-935d-eeed7dc67ba4",
                            "templated": false
                        }
                    },
                    "id": "7b3eaffd-2e1c-583b-935d-eeed7dc67ba4",
                    "currency": "GBP",
                    "amount": -6.25,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.456Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 13502.15
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e6720-bee1-f51b-5651-27a71c22c940",
                            "templated": false
                        }
                    },
                    "id": "7b3e6720-bee1-f51b-5651-27a71c22c940",
                    "currency": "GBP",
                    "amount": -12.26,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.454Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13508.4
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7b3edc0a-e131-edb1-f414-d3e147989464",
                            "templated": false
                        }
                    },
                    "id": "7b3edc0a-e131-edb1-f414-d3e147989464",
                    "currency": "GBP",
                    "amount": -27.81,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.453Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 13520.66
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3ee457-a726-84f6-f802-b7025b7c259d",
                            "templated": false
                        }
                    },
                    "id": "7b3ee457-a726-84f6-f802-b7025b7c259d",
                    "currency": "GBP",
                    "amount": -18.82,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.446Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13548.47
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e7a6f-2eec-92cc-088e-6b99d2a3b26d",
                            "templated": false
                        }
                    },
                    "id": "7b3e7a6f-2eec-92cc-088e-6b99d2a3b26d",
                    "currency": "GBP",
                    "amount": -33.24,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.443Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13567.29
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e0d2e-37e1-c5f6-2288-ffee21d4e8ff",
                            "templated": false
                        }
                    },
                    "id": "7b3e0d2e-37e1-c5f6-2288-ffee21d4e8ff",
                    "currency": "GBP",
                    "amount": -25.77,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.436Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13600.53
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3ea543-c864-7edc-505d-95d4a2e2f4e4",
                            "templated": false
                        }
                    },
                    "id": "7b3ea543-c864-7edc-505d-95d4a2e2f4e4",
                    "currency": "GBP",
                    "amount": -18.17,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.432Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13626.3
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e71ae-0602-009d-9ab3-d0264d071b90",
                            "templated": false
                        }
                    },
                    "id": "7b3e71ae-0602-009d-9ab3-d0264d071b90",
                    "currency": "GBP",
                    "amount": -4.7,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.396Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13644.47
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3ee02c-11b3-9b2d-8791-91460c0261cf",
                            "templated": false
                        }
                    },
                    "id": "7b3ee02c-11b3-9b2d-8791-91460c0261cf",
                    "currency": "GBP",
                    "amount": -31.5,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.392Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13649.17
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3ee13c-dd50-9979-a68d-3a73eb43d3ea",
                            "templated": false
                        }
                    },
                    "id": "7b3ee13c-dd50-9979-a68d-3a73eb43d3ea",
                    "currency": "GBP",
                    "amount": -5.88,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.389Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13680.67
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3ea653-4c68-a218-fd84-cf240fdedd93",
                            "templated": false
                        }
                    },
                    "id": "7b3ea653-4c68-a218-fd84-cf240fdedd93",
                    "currency": "GBP",
                    "amount": -35.07,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.336Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13686.55
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3eacc1-5485-0b7b-9b28-50051347f37d",
                            "templated": false
                        }
                    },
                    "id": "7b3eacc1-5485-0b7b-9b28-50051347f37d",
                    "currency": "GBP",
                    "amount": -37.18,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.334Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13721.62
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7b3e0279-5237-e6c3-1ec7-e76486edbcbd",
                            "templated": false
                        }
                    },
                    "id": "7b3e0279-5237-e6c3-1ec7-e76486edbcbd",
                    "currency": "GBP",
                    "amount": -20.52,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T19:10:19.293Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 13758.8
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3e9c2e-8721-5ba1-41dc-8aa77e5dfc19",
                            "templated": false
                        }
                    },
                    "id": "7b3e9c2e-8721-5ba1-41dc-8aa77e5dfc19",
                    "currency": "GBP",
                    "amount": 39.95,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13779.32
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3ee35f-0475-ff00-3def-27b5956d2001",
                            "templated": false
                        }
                    },
                    "id": "7b3ee35f-0475-ff00-3def-27b5956d2001",
                    "currency": "GBP",
                    "amount": 18.19,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13739.37
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3e467d-42b6-489d-8884-4dc95880a681",
                            "templated": false
                        }
                    },
                    "id": "7b3e467d-42b6-489d-8884-4dc95880a681",
                    "currency": "GBP",
                    "amount": 36.6,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13721.18
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3e0119-4b73-37c7-44d1-277801d76d21",
                            "templated": false
                        }
                    },
                    "id": "7b3e0119-4b73-37c7-44d1-277801d76d21",
                    "currency": "GBP",
                    "amount": 5.35,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13684.58
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3e27c1-5403-d8a3-d3d4-0ee6f5e9d9da",
                            "templated": false
                        }
                    },
                    "id": "7b3e27c1-5403-d8a3-d3d4-0ee6f5e9d9da",
                    "currency": "GBP",
                    "amount": 20.4,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13679.23
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3ec8d6-8a5c-e504-060d-1de9b2e8a706",
                            "templated": false
                        }
                    },
                    "id": "7b3ec8d6-8a5c-e504-060d-1de9b2e8a706",
                    "currency": "GBP",
                    "amount": 24.09,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13658.83
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3ed1b4-8dec-ddf0-1524-e74d2102f14f",
                            "templated": false
                        }
                    },
                    "id": "7b3ed1b4-8dec-ddf0-1524-e74d2102f14f",
                    "currency": "GBP",
                    "amount": 2000,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:19.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 13634.74
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7b3e4ff8-a18c-e65e-676f-e2804c631528",
                            "templated": false
                        }
                    },
                    "id": "7b3e4ff8-a18c-e65e-676f-e2804c631528",
                    "currency": "GBP",
                    "amount": 500,
                    "direction": "INBOUND",
                    "created": "2019-04-12T19:10:18.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11634.74
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac90ec5-8e60-7ea4-837f-952c22f4082b",
                            "templated": false
                        }
                    },
                    "id": "7ac90ec5-8e60-7ea4-837f-952c22f4082b",
                    "currency": "GBP",
                    "amount": -12.14,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.385Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 11134.74
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac90138-e259-800d-79e9-c985aa4dface",
                            "templated": false
                        }
                    },
                    "id": "7ac90138-e259-800d-79e9-c985aa4dface",
                    "currency": "GBP",
                    "amount": -14.13,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.361Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11146.88
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac9ac50-de2c-cce2-49c0-743cdebc1dd5",
                            "templated": false
                        }
                    },
                    "id": "7ac9ac50-de2c-cce2-49c0-743cdebc1dd5",
                    "currency": "GBP",
                    "amount": -26.1,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.360Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 11161.01
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac99487-a2dd-56b3-4de6-d50ff27547d1",
                            "templated": false
                        }
                    },
                    "id": "7ac99487-a2dd-56b3-4de6-d50ff27547d1",
                    "currency": "GBP",
                    "amount": -38.16,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.356Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 11187.11
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9c7f4-b7cf-8c09-543d-aef5492caf2e",
                            "templated": false
                        }
                    },
                    "id": "7ac9c7f4-b7cf-8c09-543d-aef5492caf2e",
                    "currency": "GBP",
                    "amount": -21.5,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.344Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11225.27
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac96d7c-1d71-437d-b8e8-414ebd12d429",
                            "templated": false
                        }
                    },
                    "id": "7ac96d7c-1d71-437d-b8e8-414ebd12d429",
                    "currency": "GBP",
                    "amount": -12.08,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.343Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 11246.77
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9baec-5a5b-5d6a-4b00-6c9cdccdbe2a",
                            "templated": false
                        }
                    },
                    "id": "7ac9baec-5a5b-5d6a-4b00-6c9cdccdbe2a",
                    "currency": "GBP",
                    "amount": -16.93,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.322Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11258.85
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac99a7a-f564-82f7-a534-71bf2bc27e76",
                            "templated": false
                        }
                    },
                    "id": "7ac99a7a-f564-82f7-a534-71bf2bc27e76",
                    "currency": "GBP",
                    "amount": -27.45,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.321Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11275.78
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac9689d-1508-4513-2dd1-25442ecb854e",
                            "templated": false
                        }
                    },
                    "id": "7ac9689d-1508-4513-2dd1-25442ecb854e",
                    "currency": "GBP",
                    "amount": -8.85,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.297Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 11303.23
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9bdc3-3e85-5f00-dd18-f5b6aafe2a25",
                            "templated": false
                        }
                    },
                    "id": "7ac9bdc3-3e85-5f00-dd18-f5b6aafe2a25",
                    "currency": "GBP",
                    "amount": -9.91,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.285Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11312.08
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac94901-cd5c-d753-a1dc-cee2bd82cf7e",
                            "templated": false
                        }
                    },
                    "id": "7ac94901-cd5c-d753-a1dc-cee2bd82cf7e",
                    "currency": "GBP",
                    "amount": -24.4,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.279Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 11321.99
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9083b-9973-1f4b-07f9-cab80a6fdd10",
                            "templated": false
                        }
                    },
                    "id": "7ac9083b-9973-1f4b-07f9-cab80a6fdd10",
                    "currency": "GBP",
                    "amount": -12.97,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.277Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11346.39
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac94f34-8b6a-f68a-09f1-4f97fe6a2a96",
                            "templated": false
                        }
                    },
                    "id": "7ac94f34-8b6a-f68a-09f1-4f97fe6a2a96",
                    "currency": "GBP",
                    "amount": -2.08,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.262Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11359.36
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9b2d2-4729-89a7-2e1e-7ca6960f6c61",
                            "templated": false
                        }
                    },
                    "id": "7ac9b2d2-4729-89a7-2e1e-7ca6960f6c61",
                    "currency": "GBP",
                    "amount": -38.71,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.255Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11361.44
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac98ca6-328c-14b8-ea6b-6f778cde88b0",
                            "templated": false
                        }
                    },
                    "id": "7ac98ca6-328c-14b8-ea6b-6f778cde88b0",
                    "currency": "GBP",
                    "amount": -38.62,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.242Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11400.15
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac96a24-9506-4838-1148-aa2520e14d2f",
                            "templated": false
                        }
                    },
                    "id": "7ac96a24-9506-4838-1148-aa2520e14d2f",
                    "currency": "GBP",
                    "amount": -30.72,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.231Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11438.77
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9fb1d-1a1e-b780-6545-73e77b83ea77",
                            "templated": false
                        }
                    },
                    "id": "7ac9fb1d-1a1e-b780-6545-73e77b83ea77",
                    "currency": "GBP",
                    "amount": -17.79,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.176Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11469.49
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac9c9c0-b4a7-f18e-a832-cb14a1b1a863",
                            "templated": false
                        }
                    },
                    "id": "7ac9c9c0-b4a7-f18e-a832-cb14a1b1a863",
                    "currency": "GBP",
                    "amount": -9.57,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:13:54.137Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 11487.28
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac92ebb-d233-6ea5-890b-bb5911bb52b7",
                            "templated": false
                        }
                    },
                    "id": "7ac92ebb-d233-6ea5-890b-bb5911bb52b7",
                    "currency": "GBP",
                    "amount": 3.43,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:54.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11496.85
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac964bc-ac03-8f4e-7384-0db0e27d0366",
                            "templated": false
                        }
                    },
                    "id": "7ac964bc-ac03-8f4e-7384-0db0e27d0366",
                    "currency": "GBP",
                    "amount": 5.68,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:54.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11493.42
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac915b3-1b43-a77b-f7b5-eb88e8413a1e",
                            "templated": false
                        }
                    },
                    "id": "7ac915b3-1b43-a77b-f7b5-eb88e8413a1e",
                    "currency": "GBP",
                    "amount": 5.79,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:54.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11487.74
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac9c7c0-9af2-1839-b87a-e06572956ec8",
                            "templated": false
                        }
                    },
                    "id": "7ac9c7c0-9af2-1839-b87a-e06572956ec8",
                    "currency": "GBP",
                    "amount": 12.81,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:54.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11481.95
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac91c68-ca6f-dac8-526e-3ee4dc602a47",
                            "templated": false
                        }
                    },
                    "id": "7ac91c68-ca6f-dac8-526e-3ee4dc602a47",
                    "currency": "GBP",
                    "amount": 19.28,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:54.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11469.14
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac9b1c6-84ec-fa0b-beb7-19d702919b48",
                            "templated": false
                        }
                    },
                    "id": "7ac9b1c6-84ec-fa0b-beb7-19d702919b48",
                    "currency": "GBP",
                    "amount": 36.29,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:54.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11449.86
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac96a1e-47ff-098e-7126-a19fedabb2bb",
                            "templated": false
                        }
                    },
                    "id": "7ac96a1e-47ff-098e-7126-a19fedabb2bb",
                    "currency": "GBP",
                    "amount": 2000,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:53.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 11413.57
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac98ed7-cba7-6c1f-d1a6-77d43a17da5d",
                            "templated": false
                        }
                    },
                    "id": "7ac98ed7-cba7-6c1f-d1a6-77d43a17da5d",
                    "currency": "GBP",
                    "amount": 500,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:13:52.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 9413.57
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac057cd-035f-1613-e815-f72b44b592a5",
                            "templated": false
                        }
                    },
                    "id": "7ac057cd-035f-1613-e815-f72b44b592a5",
                    "currency": "GBP",
                    "amount": -14.53,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.822Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 8913.57
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac015cc-ec82-37ea-8a93-830b9ff954ef",
                            "templated": false
                        }
                    },
                    "id": "7ac015cc-ec82-37ea-8a93-830b9ff954ef",
                    "currency": "GBP",
                    "amount": -14.06,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.740Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 8928.1
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac08ec3-88c1-eb7d-16dd-a0a5cd5854cd",
                            "templated": false
                        }
                    },
                    "id": "7ac08ec3-88c1-eb7d-16dd-a0a5cd5854cd",
                    "currency": "GBP",
                    "amount": -37.41,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.692Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 8942.16
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac0fa42-8d46-fdbb-1cae-2b20645ba6ac",
                            "templated": false
                        }
                    },
                    "id": "7ac0fa42-8d46-fdbb-1cae-2b20645ba6ac",
                    "currency": "GBP",
                    "amount": -35.74,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.691Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 8979.57
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac0e821-bf7f-01ee-89bd-0fff953fa612",
                            "templated": false
                        }
                    },
                    "id": "7ac0e821-bf7f-01ee-89bd-0fff953fa612",
                    "currency": "GBP",
                    "amount": -12.41,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.690Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 9015.31
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac065cb-bc47-8bcf-086c-4b3418b173e7",
                            "templated": false
                        }
                    },
                    "id": "7ac065cb-bc47-8bcf-086c-4b3418b173e7",
                    "currency": "GBP",
                    "amount": -13.49,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.639Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9027.72
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac02869-75e5-7e9f-c0b4-9c378399a90b",
                            "templated": false
                        }
                    },
                    "id": "7ac02869-75e5-7e9f-c0b4-9c378399a90b",
                    "currency": "GBP",
                    "amount": -14.89,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.618Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9041.21
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac08859-3334-375f-1e56-531dac189aed",
                            "templated": false
                        }
                    },
                    "id": "7ac08859-3334-375f-1e56-531dac189aed",
                    "currency": "GBP",
                    "amount": -5.48,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.609Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9056.1
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac0899b-f4df-f7bf-60ad-f0b329a58018",
                            "templated": false
                        }
                    },
                    "id": "7ac0899b-f4df-f7bf-60ad-f0b329a58018",
                    "currency": "GBP",
                    "amount": -2.33,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.601Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9061.58
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac0adc2-63fb-32aa-e02f-49b79440760b",
                            "templated": false
                        }
                    },
                    "id": "7ac0adc2-63fb-32aa-e02f-49b79440760b",
                    "currency": "GBP",
                    "amount": -39.89,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.593Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9063.91
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac02204-34fc-9e48-9d10-9b364eaaff20",
                            "templated": false
                        }
                    },
                    "id": "7ac02204-34fc-9e48-9d10-9b364eaaff20",
                    "currency": "GBP",
                    "amount": -34.85,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.575Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9103.8
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac06a21-9fec-5008-1507-808ee9feaacf",
                            "templated": false
                        }
                    },
                    "id": "7ac06a21-9fec-5008-1507-808ee9feaacf",
                    "currency": "GBP",
                    "amount": -18.05,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.573Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9138.65
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac04488-b0f5-4737-3021-66b8177db6d6",
                            "templated": false
                        }
                    },
                    "id": "7ac04488-b0f5-4737-3021-66b8177db6d6",
                    "currency": "GBP",
                    "amount": -6.77,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.569Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9156.7
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac06086-6ef1-6640-914c-4ae09d060def",
                            "templated": false
                        }
                    },
                    "id": "7ac06086-6ef1-6640-914c-4ae09d060def",
                    "currency": "GBP",
                    "amount": -34.27,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.562Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9163.47
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac092e8-cfd4-2e14-ff83-ade79cecedf5",
                            "templated": false
                        }
                    },
                    "id": "7ac092e8-cfd4-2e14-ff83-ade79cecedf5",
                    "currency": "GBP",
                    "amount": -32.24,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.546Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9197.74
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac02374-e850-e396-9939-0b1ed398b685",
                            "templated": false
                        }
                    },
                    "id": "7ac02374-e850-e396-9939-0b1ed398b685",
                    "currency": "GBP",
                    "amount": -13.89,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.536Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9229.98
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7ac0c3f0-f8b1-7223-ba4f-dc91d130804c",
                            "templated": false
                        }
                    },
                    "id": "7ac0c3f0-f8b1-7223-ba4f-dc91d130804c",
                    "currency": "GBP",
                    "amount": -11.71,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.535Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 9243.87
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac06fd5-317a-9244-6fce-21c5d556344c",
                            "templated": false
                        }
                    },
                    "id": "7ac06fd5-317a-9244-6fce-21c5d556344c",
                    "currency": "GBP",
                    "amount": -9.94,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.516Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9255.58
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7ac0d7c7-c7c1-53d5-5486-5158a88cd885",
                            "templated": false
                        }
                    },
                    "id": "7ac0d7c7-c7c1-53d5-5486-5158a88cd885",
                    "currency": "GBP",
                    "amount": -34.37,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:04:46.481Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 9265.52
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0e2be-3ebf-b9d7-4d64-3310ab97be78",
                            "templated": false
                        }
                    },
                    "id": "7ac0e2be-3ebf-b9d7-4d64-3310ab97be78",
                    "currency": "GBP",
                    "amount": 2000,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 9299.89
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0a417-866f-3ee4-624d-81c9eb654e64",
                            "templated": false
                        }
                    },
                    "id": "7ac0a417-866f-3ee4-624d-81c9eb654e64",
                    "currency": "GBP",
                    "amount": 23.78,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7299.89
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0cea9-1b57-16e6-66bb-c78847fdebdf",
                            "templated": false
                        }
                    },
                    "id": "7ac0cea9-1b57-16e6-66bb-c78847fdebdf",
                    "currency": "GBP",
                    "amount": 18.54,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7276.11
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0811f-453c-0c6c-c8b7-3314ccdfa4a4",
                            "templated": false
                        }
                    },
                    "id": "7ac0811f-453c-0c6c-c8b7-3314ccdfa4a4",
                    "currency": "GBP",
                    "amount": 1.98,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7257.57
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0f3d7-99e1-0b1e-8b54-5e00fec1d2c6",
                            "templated": false
                        }
                    },
                    "id": "7ac0f3d7-99e1-0b1e-8b54-5e00fec1d2c6",
                    "currency": "GBP",
                    "amount": 28.44,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7255.59
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0f589-ca9b-7831-fd9d-375c2aa3c2a2",
                            "templated": false
                        }
                    },
                    "id": "7ac0f589-ca9b-7831-fd9d-375c2aa3c2a2",
                    "currency": "GBP",
                    "amount": 13.65,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7227.15
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac07a21-5b53-7e81-b0d8-a06d860712b7",
                            "templated": false
                        }
                    },
                    "id": "7ac07a21-5b53-7e81-b0d8-a06d860712b7",
                    "currency": "GBP",
                    "amount": 6.65,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7213.5
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7ac0edb5-d25b-0076-b341-c5e03a2850f6",
                            "templated": false
                        }
                    },
                    "id": "7ac0edb5-d25b-0076-b341-c5e03a2850f6",
                    "currency": "GBP",
                    "amount": 500,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:04:45.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7206.85
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7abcd155-5b04-da27-eb00-ea1c563c58cd",
                            "templated": false
                        }
                    },
                    "id": "7abcd155-5b04-da27-eb00-ea1c563c58cd",
                    "currency": "GBP",
                    "amount": -11.9,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.605Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 6706.85
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7abc2b5d-0b5a-0681-584c-242c3be16f17",
                            "templated": false
                        }
                    },
                    "id": "7abc2b5d-0b5a-0681-584c-242c3be16f17",
                    "currency": "GBP",
                    "amount": -27.5,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.596Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 6718.75
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7abc65b1-c26f-6098-9034-d1063c66fa21",
                            "templated": false
                        }
                    },
                    "id": "7abc65b1-c26f-6098-9034-d1063c66fa21",
                    "currency": "GBP",
                    "amount": -21.8,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.568Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 6746.25
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7abc0e12-8b95-2f96-76b3-04c9748cb9dc",
                            "templated": false
                        }
                    },
                    "id": "7abc0e12-8b95-2f96-76b3-04c9748cb9dc",
                    "currency": "GBP",
                    "amount": -24.88,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.446Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 6768.05
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7abcd2eb-5462-476a-a692-7ab5c3393636",
                            "templated": false
                        }
                    },
                    "id": "7abcd2eb-5462-476a-a692-7ab5c3393636",
                    "currency": "GBP",
                    "amount": -39.67,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.386Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 6792.93
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/out/7abc4fdc-bf7d-dd81-72b6-79cdea2ad29f",
                            "templated": false
                        }
                    },
                    "id": "7abc4fdc-bf7d-dd81-72b6-79cdea2ad29f",
                    "currency": "GBP",
                    "amount": -30.89,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.361Z",
                    "narrative": "External Payment",
                    "source": "FASTER_PAYMENTS_OUT",
                    "balance": 6832.6
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc4e52-38f5-4e29-ec14-ee2ee3217d67",
                            "templated": false
                        }
                    },
                    "id": "7abc4e52-38f5-4e29-ec14-ee2ee3217d67",
                    "currency": "GBP",
                    "amount": -16.74,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.280Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6863.49
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc3aa3-f669-d0d2-d2a4-ebf5e246b782",
                            "templated": false
                        }
                    },
                    "id": "7abc3aa3-f669-d0d2-d2a4-ebf5e246b782",
                    "currency": "GBP",
                    "amount": -9.03,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.272Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6880.23
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abcbf15-bb9a-6198-1b44-afcc14fddefc",
                            "templated": false
                        }
                    },
                    "id": "7abcbf15-bb9a-6198-1b44-afcc14fddefc",
                    "currency": "GBP",
                    "amount": -2.38,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.272Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6889.26
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc4690-d04b-6804-f5db-a50acf12c046",
                            "templated": false
                        }
                    },
                    "id": "7abc4690-d04b-6804-f5db-a50acf12c046",
                    "currency": "GBP",
                    "amount": -32.13,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.263Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6891.64
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc35fe-c7a5-7a81-1a81-84193b86df29",
                            "templated": false
                        }
                    },
                    "id": "7abc35fe-c7a5-7a81-1a81-84193b86df29",
                    "currency": "GBP",
                    "amount": -13.92,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.254Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6923.77
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc077a-8c91-3e8b-a416-9d553a7a0f54",
                            "templated": false
                        }
                    },
                    "id": "7abc077a-8c91-3e8b-a416-9d553a7a0f54",
                    "currency": "GBP",
                    "amount": -18.15,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.253Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6937.69
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abcce9e-92dd-ca2a-7269-eec358726b62",
                            "templated": false
                        }
                    },
                    "id": "7abcce9e-92dd-ca2a-7269-eec358726b62",
                    "currency": "GBP",
                    "amount": -15.92,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.248Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6955.84
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abce3b5-609a-d440-33e9-de546841cd1e",
                            "templated": false
                        }
                    },
                    "id": "7abce3b5-609a-d440-33e9-de546841cd1e",
                    "currency": "GBP",
                    "amount": -7.99,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.239Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6971.76
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc28ef-78cf-f8fb-1e94-fcf3c37b1f50",
                            "templated": false
                        }
                    },
                    "id": "7abc28ef-78cf-f8fb-1e94-fcf3c37b1f50",
                    "currency": "GBP",
                    "amount": -25.37,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.226Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 6979.75
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abccfcc-5085-a6f1-a30c-018a87ae0a70",
                            "templated": false
                        }
                    },
                    "id": "7abccfcc-5085-a6f1-a30c-018a87ae0a70",
                    "currency": "GBP",
                    "amount": -38.48,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.205Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 7005.12
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc66d2-b3ab-1276-81d7-22ae8172d85e",
                            "templated": false
                        }
                    },
                    "id": "7abc66d2-b3ab-1276-81d7-22ae8172d85e",
                    "currency": "GBP",
                    "amount": -24.05,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.195Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 7043.6
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc8b47-db64-bf0c-9c63-c5a206ad65dc",
                            "templated": false
                        }
                    },
                    "id": "7abc8b47-db64-bf0c-9c63-c5a206ad65dc",
                    "currency": "GBP",
                    "amount": -21.61,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.191Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 7067.65
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/mastercard/7abc9d0b-bdea-c437-890b-5a6482c44cac",
                            "templated": false
                        }
                    },
                    "id": "7abc9d0b-bdea-c437-890b-5a6482c44cac",
                    "currency": "GBP",
                    "amount": -13.51,
                    "direction": "OUTBOUND",
                    "created": "2019-04-12T17:00:46.140Z",
                    "narrative": "Nasa",
                    "source": "MASTER_CARD",
                    "balance": 7089.26
                },
                {
                    "_links": {
                        "detail": {
                            "href": "api/v1/transactions/fps/in/7abc18c5-0089-4205-ffd9-3c869e344a19",
                            "templated": false
                        }
                    },
                    "id": "7abc18c5-0089-4205-ffd9-3c869e344a19",
                    "currency": "GBP",
                    "amount": 34.23,
                    "direction": "INBOUND",
                    "created": "2019-04-12T17:00:46.000Z",
                    "narrative": "someRef",
                    "source": "FASTER_PAYMENTS_IN",
                    "balance": 7102.77
                }
            ]
        }
    },
    accounts: {
        "_links": {
         "card": {
          "href": "api/v1/cards",
          "templated": false
         },
         "customer": {
          "href": "api/v1/customers",
          "templated": false
         },
         "mandates": {
          "href": "/api/v1/direct-debit/mandates",
          "templated": false
         },
         "payees": {
          "href": "api/v1/contacts",
          "templated": false
         },
         "transactions": {
          "href": "api/v1/transactions?from={fromDate}&to={toDate}",
          "templated": true
         }
        },
        "id": "6fd40051-17c4-0da2-b409-c8f39f3ae71d",
        "name": "80c56d28-2268-45d3-9568-331911e30a00 GBP",
        "number": "57741486",
        "accountNumber": "57741486",
        "sortCode": "608371",
        "currency": "GBP",
        "iban": "GB60SRLG60837157741486",
        "bic": "SRLGGB2L",
        "createdAt": "2018-04-10T18:28:41.181Z"
       }
}