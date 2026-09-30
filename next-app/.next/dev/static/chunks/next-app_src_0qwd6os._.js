(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-app/src/app/(auth)/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plane.mjs [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/stores/auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(68);
    if ($[0] !== "048e26ae83b9ca1eb53922cdba03c148d9dc54060811742d3dd3a71ad9d5ac1a") {
        for(let $i = 0; $i < 68; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "048e26ae83b9ca1eb53922cdba03c148d9dc54060811742d3dd3a71ad9d5ac1a";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t1;
    if ($[2] !== email || $[3] !== login || $[4] !== password || $[5] !== router) {
        t1 = ({
            "LoginPage[handleLogin]": async (e)=>{
                e.preventDefault();
                const newErrors = {};
                if (!email.trim()) {
                    newErrors.email = "Please enter your email";
                }
                if (!password.trim()) {
                    newErrors.password = "Please enter your password";
                }
                if (Object.keys(newErrors).length > 0) {
                    setErrors(newErrors);
                    return;
                }
                setErrors({});
                setIsLoading(true);
                await new Promise(_temp);
                login({
                    id: "1",
                    name: "Admin User",
                    email,
                    role: "admin"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Welcome back! Login successful.");
                router.push("/dashboard");
            }
        })["LoginPage[handleLogin]"];
        $[2] = email;
        $[3] = login;
        $[4] = password;
        $[5] = router;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const handleLogin = t1;
    let t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat scale-105",
            style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')"
            }
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-primary-900/40"
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
                ...Array(6)
            ].map(_LoginPageAnonymous)
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            y: -30
        };
        t6 = {
            opacity: 1,
            y: 0
        };
        t7 = {
            duration: 0.6
        };
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t5,
            animate: t6,
            transition: t7,
            className: "mb-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 mb-4 shadow-lg shadow-primary-500/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                        className: "w-8 h-8 text-white -rotate-45"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                        lineNumber: 117,
                        columnNumber: 259
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 117,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-white tracking-wide",
                    children: "AIRPORT"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 117,
                    columnNumber: 316
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-medium text-white/70 tracking-widest mt-1",
                    children: "COMMUNITY SYSTEM"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 117,
                    columnNumber: 388
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t10;
    let t11;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            opacity: 0,
            y: 20,
            scale: 0.98
        };
        t10 = {
            opacity: 1,
            y: 0,
            scale: 1
        };
        t11 = {
            duration: 0.5,
            delay: 0.2
        };
        $[14] = t10;
        $[15] = t11;
        $[16] = t9;
    } else {
        t10 = $[14];
        t11 = $[15];
        t9 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold text-white",
                    children: "Welcome Back"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 150,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-xs text-white/50",
                    children: "Enter your credentials to sign in"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 150,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1.5 block text-xs font-medium text-white/70",
            children: [
                "Email ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-400",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 157,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== errors.email) {
        t14 = errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1 text-[10px] font-medium text-red-400",
            children: errors.email
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 164,
            columnNumber: 27
        }, this);
        $[19] = errors.email;
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            size: 18,
            className: "text-white/40 shrink-0"
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== errors.email) {
        t16 = ({
            "LoginPage[<input>.onChange]": (e_0)=>{
                setEmail(e_0.target.value);
                if (errors.email) {
                    setErrors(_LoginPageInputOnChangeSetErrors);
                }
            }
        })["LoginPage[<input>.onChange]"];
        $[22] = errors.email;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== email || $[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 border border-white/[0.15] rounded-xl px-4 py-3 bg-white/[0.05] focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400/30 transition-all duration-300",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "admin@airlines.com",
                    value: email,
                    onChange: t16,
                    className: "w-full outline-none text-sm text-white placeholder-white/30 bg-transparent"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 194,
                    columnNumber: 234
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[24] = email;
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t14 || $[28] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t17;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "mb-1.5 block text-xs font-medium text-white/70",
            children: [
                "Password ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-400",
                    children: "*"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 212,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== errors.password) {
        t20 = errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-1 text-[10px] font-medium text-red-400",
            children: errors.password
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 219,
            columnNumber: 30
        }, this);
        $[31] = errors.password;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
            size: 18,
            className: "text-white/40 shrink-0"
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    const t22 = showPassword ? "text" : "password";
    let t23;
    if ($[34] !== errors.password) {
        t23 = ({
            "LoginPage[<input>.onChange]": (e_1)=>{
                setPassword(e_1.target.value);
                if (errors.password) {
                    setErrors(_LoginPageInputOnChangeSetErrors2);
                }
            }
        })["LoginPage[<input>.onChange]"];
        $[34] = errors.password;
        $[35] = t23;
    } else {
        t23 = $[35];
    }
    let t24;
    if ($[36] !== password || $[37] !== t22 || $[38] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: t22,
            placeholder: "Min. 8 characters",
            value: password,
            onChange: t23,
            className: "w-full outline-none text-sm text-white placeholder-white/30 bg-transparent"
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[36] = password;
        $[37] = t22;
        $[38] = t23;
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] !== showPassword) {
        t25 = ({
            "LoginPage[<button>.onClick]": ()=>setShowPassword(!showPassword)
        })["LoginPage[<button>.onClick]"];
        $[40] = showPassword;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] !== showPassword) {
        t26 = showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 270,
            columnNumber: 26
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 270,
            columnNumber: 49
        }, this);
        $[42] = showPassword;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t25 || $[45] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t25,
            className: "text-white/40 hover:text-white/60 transition cursor-pointer",
            children: t26
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[44] = t25;
        $[45] = t26;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== t24 || $[48] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 border border-white/[0.15] rounded-xl px-4 py-3 bg-white/[0.05] focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400/30 transition-all duration-300",
            children: [
                t21,
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[47] = t24;
        $[48] = t27;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] !== t20 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[50] = t20;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex cursor-pointer items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            defaultChecked: true,
                            className: "h-3.5 w-3.5 cursor-pointer accent-primary-500 rounded"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                            lineNumber: 305,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] text-white/50",
                            children: "Keep me logged in"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                            lineNumber: 305,
                            columnNumber: 235
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 305,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "text-[11px] text-primary-400 hover:text-primary-300 transition cursor-pointer",
                    children: "Forgot password?"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 305,
                    columnNumber: 311
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 305,
            columnNumber: 11
        }, this);
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] !== isLoading) {
        t31 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-4 w-4",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                            lineNumber: 312,
                            columnNumber: 83
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                            lineNumber: 312,
                            columnNumber: 189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 312,
                    columnNumber: 25
                }, this),
                "Signing In..."
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 312,
            columnNumber: 23
        }, this) : "Sign In";
        $[54] = isLoading;
        $[55] = t31;
    } else {
        t31 = $[55];
    }
    let t32;
    if ($[56] !== isLoading || $[57] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isLoading,
            className: "mt-1 w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            children: t31
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[56] = isLoading;
        $[57] = t31;
        $[58] = t32;
    } else {
        t32 = $[58];
    }
    let t33;
    if ($[59] !== handleLogin || $[60] !== t18 || $[61] !== t29 || $[62] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t9,
            animate: t10,
            transition: t11,
            className: "w-full max-w-[400px] rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] px-7 py-8 shadow-2xl",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "flex flex-col gap-4",
                    children: [
                        t18,
                        t29,
                        t30,
                        t32
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 329,
                    columnNumber: 198
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[59] = handleLogin;
        $[60] = t18;
        $[61] = t29;
        $[62] = t32;
        $[63] = t33;
    } else {
        t33 = $[63];
    }
    let t34;
    let t35;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.5
            },
            className: "mt-4 h-11 w-full max-w-[400px] rounded-xl border border-white/[0.08] bg-white/[0.05] backdrop-blur-sm text-xs font-semibold text-white/80 shadow-lg transition-all duration-200 hover:bg-white/[0.1] hover:text-white cursor-pointer",
            children: "Create an Account"
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-center text-[10px] text-white/40",
            children: "(c) 2024 Airport Community System. All rights reserved."
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[64] = t34;
        $[65] = t35;
    } else {
        t34 = $[64];
        t35 = $[65];
    }
    let t36;
    if ($[66] !== t33) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-screen w-full overflow-hidden",
            children: [
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-8",
                    children: [
                        t8,
                        t33,
                        t34,
                        t35
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
                    lineNumber: 357,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[66] = t33;
        $[67] = t36;
    } else {
        t36 = $[67];
    }
    return t36;
}
_s(LoginPage, "UDSPDoIyu6WnDXYwAQpDt98fDD0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = LoginPage;
function _LoginPageInputOnChangeSetErrors2(p_0) {
    return {
        ...p_0,
        password: ""
    };
}
function _LoginPageInputOnChangeSetErrors(p) {
    return {
        ...p,
        email: ""
    };
}
function _LoginPageAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute w-2 h-2 bg-white/10 rounded-full",
        style: {
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`
        },
        animate: {
            y: [
                -20,
                20,
                -20
            ],
            opacity: [
                0.2,
                0.5,
                0.2
            ]
        },
        transition: {
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
        }
    }, i, false, {
        fileName: "[project]/next-app/src/app/(auth)/login/page.tsx",
        lineNumber: 378,
        columnNumber: 10
    }, this);
}
function _temp(r) {
    return setTimeout(r, 1500);
}
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/src/stores/auth-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        user: null,
        isAuthenticated: false,
        login: (user)=>set({
                user,
                isAuthenticated: true
            }),
        logout: ()=>set({
                user: null,
                isAuthenticated: false
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-app_src_0qwd6os._.js.map