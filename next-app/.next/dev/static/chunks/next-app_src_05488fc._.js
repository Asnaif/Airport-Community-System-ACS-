(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-app/src/app/(dashboard)/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$FlightChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/dashboard/FlightChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plane.mjs [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/warehouse.mjs [app-client] (ecmascript) <export default as Warehouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/file-check-corner.mjs [app-client] (ecmascript) <export default as FileCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/stores/auth-store.ts [app-client] (ecmascript)");
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
function DashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "853b15d4ec77f504a764ae5533b281af549c7bac625dde2ebe4f332e74f9877f") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "853b15d4ec77f504a764ae5533b281af549c7bac625dde2ebe4f332e74f9877f";
    }
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["airlineData"].filter(_DashboardPageAirlineDataFilter);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const activeAirlines = t0.length;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ghaData"].filter(_DashboardPageGhaDataFilter);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const activeGhas = t1.length;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold text-slate-800 dark:text-white",
            children: "Dashboard Overview"
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = user?.name || "Admin";
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 dark:text-slate-400 mt-1",
                        children: [
                            "Welcome back, ",
                            t3,
                            "! Here is what is happening today."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 47,
                        columnNumber: 100
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 47,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Active Airlines",
            count: activeAirlines,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
            color: "blue",
            trend: {
                value: 12,
                isUp: true
            },
            delay: 100
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Registered GHAs",
            count: activeGhas,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"],
            color: "emerald",
            trend: {
                value: 4,
                isUp: true
            },
            delay: 200
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Total Passengers",
            count: 136500,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "amber",
            trend: {
                value: 8,
                isUp: true
            },
            delay: 300
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
            children: [
                t5,
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Flight Operations",
                    count: 1950,
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__["FileCheck2"],
                    color: "rose",
                    trend: {
                        value: 2.5,
                        isUp: false
                    },
                    delay: 400
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                    lineNumber: 85,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$FlightChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 95,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 102,
                        columnNumber: 101
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                    lineNumber: 102,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t4,
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[12] = t4;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    return t11;
}
_s(DashboardPage, "/yJkZx9C+hPc37ZKQ1/3plcjX54=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = DashboardPage;
function _DashboardPageGhaDataFilter(g) {
    return g.status === "Active";
}
function _DashboardPageAirlineDataFilter(a) {
    return a.status === "Active";
}
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/src/components/dashboard/FlightChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlightChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function FlightChart() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "f06470e8e98c702f37d3f6b7540be0daffcc25e57c630858e114af7a6955f8de") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f06470e8e98c702f37d3f6b7540be0daffcc25e57c630858e114af7a6955f8de";
    }
    const [chartType, setChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("area");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-semibold text-slate-800 dark:text-white",
                    children: "Flight Operations"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                    lineNumber: 19,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                    children: "Monthly flights & passengers overview"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                    lineNumber: 19,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "FlightChart[<button>.onClick]": ()=>setChartType("area")
        })["FlightChart[<button>.onClick]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = chartType === "area" ? "bg-white dark:bg-slate-600 text-slate-700 dark:text-white shadow-sm" : "text-slate-500";
    let t3;
    if ($[3] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs rounded-md font-medium transition-all cursor-pointer", t2);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: t3,
            children: "Area"
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "FlightChart[<button>.onClick]": ()=>setChartType("bar")
        })["FlightChart[<button>.onClick]"];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = chartType === "bar" ? "bg-white dark:bg-slate-600 text-slate-700 dark:text-white shadow-sm" : "text-slate-500";
    let t7;
    if ($[8] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1 text-xs rounded-md font-medium transition-all cursor-pointer", t6);
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: t7,
            children: "Bar"
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t4 || $[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-0.5",
                    children: [
                        t4,
                        t8
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                    lineNumber: 78,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== chartType) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            width: "100%",
            height: 280,
            children: chartType === "area" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monthlyFlightsData"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "flightGradient",
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#3b82f6",
                                    stopOpacity: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                    lineNumber: 87,
                                    columnNumber: 189
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#3b82f6",
                                    stopOpacity: 0
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                    lineNumber: 87,
                                    columnNumber: 247
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 87,
                            columnNumber: 125
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 87,
                        columnNumber: 119
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        stroke: "#e2e8f0"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 87,
                        columnNumber: 329
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "month",
                        tick: {
                            fontSize: 12,
                            fill: "#94a3b8"
                        }
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 87,
                        columnNumber: 385
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        tick: {
                            fontSize: 12,
                            fill: "#94a3b8"
                        }
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 90,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: {
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 93,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                        type: "monotone",
                        dataKey: "flights",
                        stroke: "#3b82f6",
                        strokeWidth: 2.5,
                        fill: "url(#flightGradient)"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 97,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                lineNumber: 87,
                columnNumber: 82
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                data: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monthlyFlightsData"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        strokeDasharray: "3 3",
                        stroke: "#e2e8f0"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 97,
                        columnNumber: 170
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                        dataKey: "month",
                        tick: {
                            fontSize: 12,
                            fill: "#94a3b8"
                        }
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 97,
                        columnNumber: 226
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                        tick: {
                            fontSize: 12,
                            fill: "#94a3b8"
                        }
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 100,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        contentStyle: {
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 103,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "flights",
                        fill: "#3b82f6",
                        radius: [
                            6,
                            6,
                            0,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 107,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                        dataKey: "passengers",
                        fill: "#10b981",
                        radius: [
                            6,
                            6,
                            0,
                            0
                        ],
                        opacity: 0.6
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 107,
                        columnNumber: 76
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                lineNumber: 97,
                columnNumber: 134
            }, this)
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[15] = chartType;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t10 || $[18] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t9;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
}
_s(FlightChart, "v7cWgou+POpSX2v0GNVc4gw3kzU=");
_c = FlightChart;
var _c;
__turbopack_context__.k.register(_c, "FlightChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/src/components/dashboard/RecentActivity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function RecentActivity() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2d70bd4fda3541aa588889955f24cecbed5d2d8256b3b7b0c2fc99808f72187e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2d70bd4fda3541aa588889955f24cecbed5d2d8256b3b7b0c2fc99808f72187e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const icons = {
            create: {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
                color: "text-emerald-500",
                bg: "bg-emerald-50 dark:bg-emerald-900/30"
            },
            update: {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
                color: "text-primary-500",
                bg: "bg-primary-50 dark:bg-primary-900/30"
            },
            delete: {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
                color: "text-red-500",
                bg: "bg-red-50 dark:bg-red-900/30"
            }
        };
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold text-slate-800 dark:text-white",
                            children: "Recent Activity"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                            lineNumber: 34,
                            columnNumber: 188
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-xs text-primary-500 hover:text-primary-600 font-medium cursor-pointer",
                            children: "View All"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                            lineNumber: 34,
                            columnNumber: 279
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                    lineNumber: 34,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recentActivity"].map({
                        "RecentActivity[recentActivity.map()]": (item, i)=>{
                            const { icon: ItemIcon, color, bg } = icons[item.type];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 animate-fade-in",
                                style: {
                                    animationDelay: `${i * 100}ms`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", bg),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                                            size: 15,
                                            className: color
                                        }, void 0, false, {
                                            fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                            lineNumber: 43,
                                            columnNumber: 104
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 43,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-700 dark:text-slate-200 font-medium",
                                                children: item.action
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 43,
                                                columnNumber: 182
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                children: item.entity
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 43,
                                                columnNumber: 269
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 43,
                                        columnNumber: 150
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                                lineNumber: 43,
                                                columnNumber: 443
                                            }, this),
                                            item.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 43,
                                        columnNumber: 350
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 41,
                                columnNumber: 20
                            }, this);
                        }
                    }["RecentActivity[recentActivity.map()]"])
                }, void 0, false, {
                    fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                    lineNumber: 34,
                    columnNumber: 397
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = RecentActivity;
var _c;
__turbopack_context__.k.register(_c, "RecentActivity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StatsCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "2b10327dfea82f0128edd50a29159dd2594ffae2be8cce47c69a1732c606f82e") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b10327dfea82f0128edd50a29159dd2594ffae2be8cce47c69a1732c606f82e";
    }
    const { title, count, icon: Icon, trend, color: t1, delay: t2 } = t0;
    const color = t1 === undefined ? "blue" : t1;
    const delay = t2 === undefined ? 0 : t2;
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gradients = {
        blue: "from-primary-500/10 to-primary-600/5 dark:from-primary-500/20 dark:to-primary-600/10",
        emerald: "from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10",
        amber: "from-amber-500/10 to-amber-600/5 dark:from-amber-500/20 dark:to-amber-600/10",
        rose: "from-rose-500/10 to-rose-600/5 dark:from-rose-500/20 dark:to-rose-600/10"
    };
    const iconBg = {
        blue: "bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400",
        emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400",
        amber: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400",
        rose: "bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400"
    };
    let t3;
    let t4;
    if ($[1] !== delay) {
        t3 = ({
            "StatsCard[useEffect()]": ()=>{
                const timer = setTimeout({
                    "StatsCard[useEffect() > setTimeout()]": ()=>setIsVisible(true)
                }["StatsCard[useEffect() > setTimeout()]"], delay);
                return ()=>clearTimeout(timer);
            }
        })["StatsCard[useEffect()]"];
        t4 = [
            delay
        ];
        $[1] = delay;
        $[2] = t3;
        $[3] = t4;
    } else {
        t3 = $[2];
        t4 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[4] !== count || $[5] !== isVisible) {
        t5 = ({
            "StatsCard[useEffect()]": ()=>{
                if (!isVisible) {
                    return;
                }
                const increment = count / 40;
                let current = 0;
                const timer_0 = setInterval({
                    "StatsCard[useEffect() > setInterval()]": ()=>{
                        current = current + increment;
                        current;
                        if (current >= count) {
                            setDisplayCount(count);
                            clearInterval(timer_0);
                        } else {
                            setDisplayCount(Math.floor(current));
                        }
                    }
                }["StatsCard[useEffect() > setInterval()]"], 30);
                return ()=>clearInterval(timer_0);
            }
        })["StatsCard[useEffect()]"];
        t6 = [
            count,
            isVisible
        ];
        $[4] = count;
        $[5] = isVisible;
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/60", "bg-gradient-to-br shadow-sm hover:shadow-md transition-all duration-300", "min-w-[260px] group", gradients[color], isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "transition-all duration-500");
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 top-0 w-1/2 h-full opacity-[0.07] pointer-events-none",
            style: {
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)"
            }
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    const t9 = "relative z-10 flex items-center gap-4 px-6 py-5";
    const t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110", iconBg[color]);
    let t11;
    if ($[9] !== Icon) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 26,
            strokeWidth: 1.8
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[9] = Icon;
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== t10 || $[12] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== title) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 dark:text-slate-400 font-medium",
            children: title
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[14] = title;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] !== displayCount) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold text-slate-800 dark:text-white animate-counter",
            children: displayCount
        }, void 0, false, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[16] = displayCount;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== trend) {
        t15 = trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium mt-0.5", trend.isUp ? "text-emerald-600" : "text-red-500"),
            children: [
                trend.isUp ? "+" : "-",
                trend.value,
                "% from last month"
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 153,
            columnNumber: 20
        }, this);
        $[18] = trend;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t13 || $[21] !== t14 || $[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[20] = t13;
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t12 || $[25] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t16;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t17 || $[28] !== t7 || $[29] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: t7,
            children: [
                t8,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/next-app/src/components/ui/Card.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t7;
        $[29] = t8;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    return t18;
}
_s(StatsCard, "+weBjSEeyt3zXTIFtiGrRcXXHB4=");
_c = StatsCard;
var _c;
__turbopack_context__.k.register(_c, "StatsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-app/src/data/seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "airlineData",
    ()=>airlineData,
    "ghaData",
    ()=>ghaData,
    "monthlyFlightsData",
    ()=>monthlyFlightsData,
    "recentActivity",
    ()=>recentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-client] (ecmascript)");
;
const airlineData = [
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'PIA',
        iataCode: 'PK',
        icaoCode: 'PIA',
        airlinePrefix: '214',
        country: 'Pakistan',
        companyNo: '1234567',
        contactName: 'Salman Ahmad',
        email: 'salman@gmail.com',
        status: 'Active',
        createdAt: '2024-01-15',
        updatedAt: '2024-06-20'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Airblue',
        iataCode: 'PA',
        icaoCode: 'ABQ',
        airlinePrefix: '215',
        country: 'Pakistan',
        companyNo: '2345678',
        contactName: 'Rayman Ali',
        email: 'rayman@gmail.com',
        status: 'Active',
        createdAt: '2024-02-10',
        updatedAt: '2024-07-15'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Air Sial',
        iataCode: 'PP',
        icaoCode: 'SIP',
        airlinePrefix: '216',
        country: 'Pakistan',
        companyNo: '3456789',
        contactName: 'Hassan Raza',
        email: 'hassan@airsial.com',
        status: 'Active',
        createdAt: '2024-03-01',
        updatedAt: '2024-08-05'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Fly Jinnah',
        iataCode: 'SP',
        icaoCode: 'FUL',
        airlinePrefix: '217',
        country: 'Pakistan',
        companyNo: '4567890',
        contactName: 'Ali Khan',
        email: 'ali@flyjinnah.com',
        status: 'Inactive',
        createdAt: '2024-03-20',
        updatedAt: '2024-09-10'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Emirates',
        iataCode: 'EK',
        icaoCode: 'UAE',
        airlinePrefix: '176',
        country: 'UAE',
        companyNo: '9876543',
        contactName: 'Ahmed Khan',
        email: 'ahmed@emirates.com',
        status: 'Active',
        createdAt: '2024-01-05',
        updatedAt: '2024-05-25'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Qatar Airways',
        iataCode: 'QR',
        icaoCode: 'QTR',
        airlinePrefix: '157',
        country: 'Qatar',
        companyNo: '5678901',
        contactName: 'Ali Raza',
        email: 'ali@qatar.com',
        status: 'Active',
        createdAt: '2024-02-28',
        updatedAt: '2024-07-30'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Turkish Airlines',
        iataCode: 'TK',
        icaoCode: 'THY',
        airlinePrefix: '235',
        country: 'Turkey',
        companyNo: '3456789',
        contactName: 'Mehmet Yilmaz',
        email: 'mehmet@turkish.com',
        status: 'Inactive',
        createdAt: '2024-04-10',
        updatedAt: '2024-08-15'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Etihad Airways',
        iataCode: 'EY',
        icaoCode: 'ETD',
        airlinePrefix: '607',
        country: 'UAE',
        companyNo: '2345678',
        contactName: 'Omar Siddiqui',
        email: 'omar@etihad.com',
        status: 'Active',
        createdAt: '2024-01-25',
        updatedAt: '2024-06-10'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Saudi Airlines',
        iataCode: 'SV',
        icaoCode: 'SVA',
        airlinePrefix: '065',
        country: 'Saudi Arabia',
        companyNo: '1122334',
        contactName: 'Faisal Khan',
        email: 'faisal@saudi.com',
        status: 'Active',
        createdAt: '2024-05-05',
        updatedAt: '2024-09-20'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'British Airways',
        iataCode: 'BA',
        icaoCode: 'BAW',
        airlinePrefix: '125',
        country: 'United Kingdom',
        companyNo: '7788990',
        contactName: 'James Smith',
        email: 'james@ba.com',
        status: 'Active',
        createdAt: '2024-02-15',
        updatedAt: '2024-07-05'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Lufthansa',
        iataCode: 'LH',
        icaoCode: 'DLH',
        airlinePrefix: '220',
        country: 'Germany',
        companyNo: '5566778',
        contactName: 'Hans Mueller',
        email: 'hans@lufthansa.com',
        status: 'Active',
        createdAt: '2024-03-10',
        updatedAt: '2024-08-25'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Singapore Airlines',
        iataCode: 'SQ',
        icaoCode: 'SIA',
        airlinePrefix: '618',
        country: 'Singapore',
        companyNo: '8899001',
        contactName: 'Tan Wei',
        email: 'tan@singapore.com',
        status: 'Active',
        createdAt: '2024-04-20',
        updatedAt: '2024-09-01'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Cathay Pacific',
        iataCode: 'CX',
        icaoCode: 'CPA',
        airlinePrefix: '160',
        country: 'Hong Kong',
        companyNo: '3344556',
        contactName: 'Wong Li',
        email: 'wong@cathaypacific.com',
        status: 'Inactive',
        createdAt: '2024-05-15',
        updatedAt: '2024-10-05'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Malaysia Airlines',
        iataCode: 'MH',
        icaoCode: 'MAS',
        airlinePrefix: '232',
        country: 'Malaysia',
        companyNo: '6677889',
        contactName: 'Ahmad Bin',
        email: 'ahmad@malaysia.com',
        status: 'Active',
        createdAt: '2024-06-01',
        updatedAt: '2024-10-20'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Gulf Air',
        iataCode: 'GF',
        icaoCode: 'GFA',
        airlinePrefix: '072',
        country: 'Bahrain',
        companyNo: '9900112',
        contactName: 'Hassan Ali',
        email: 'hassan@gulfair.com',
        status: 'Active',
        createdAt: '2024-03-25',
        updatedAt: '2024-08-10'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Flydubai',
        iataCode: 'FZ',
        icaoCode: 'FDB',
        airlinePrefix: '141',
        country: 'UAE',
        companyNo: '8877665',
        contactName: 'Rashid Omar',
        email: 'rashid@flydubai.com',
        status: 'Active',
        createdAt: '2024-07-10',
        updatedAt: '2024-11-01'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Air India',
        iataCode: 'AI',
        icaoCode: 'AIC',
        airlinePrefix: '098',
        country: 'India',
        companyNo: '4455667',
        contactName: 'Raj Patel',
        email: 'raj@airindia.com',
        status: 'Inactive',
        createdAt: '2024-04-05',
        updatedAt: '2024-09-15'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Oman Air',
        iataCode: 'WY',
        icaoCode: 'OMA',
        airlinePrefix: '910',
        country: 'Oman',
        companyNo: '2233445',
        contactName: 'Said Al',
        email: 'said@omanair.com',
        status: 'Inactive',
        createdAt: '2024-08-20',
        updatedAt: '2024-12-01'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'Kuwait Airways',
        iataCode: 'KU',
        icaoCode: 'KAC',
        airlinePrefix: '229',
        country: 'Kuwait',
        companyNo: '4455223',
        contactName: 'Abdullah Mo',
        email: 'abdullah@kuwait.com',
        status: 'Active',
        createdAt: '2024-05-30',
        updatedAt: '2024-10-10'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        legalName: 'IndiGo',
        iataCode: '6E',
        icaoCode: 'IGO',
        airlinePrefix: '312',
        country: 'India',
        companyNo: '9988776',
        contactName: 'Vikram Sharma',
        email: 'vikram@indigo.com',
        status: 'Inactive',
        createdAt: '2024-06-15',
        updatedAt: '2024-11-20'
    }
];
const ghaData = [
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        companyName: 'Shaheen Airport Services',
        licenseNo: 'GHA-001',
        country: 'Pakistan',
        companyNo: 'SAS-12345',
        contactName: 'Imran Malik',
        email: 'imran@sas.pk',
        status: 'Active',
        serviceScope: 'Full',
        terminalAssignment: 'Terminal 1',
        createdAt: '2024-01-10',
        updatedAt: '2024-06-15'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        companyName: 'Royal Airport Services',
        licenseNo: 'GHA-002',
        country: 'Pakistan',
        companyNo: 'RAS-67890',
        contactName: 'Farhan Ahmed',
        email: 'farhan@ras.pk',
        status: 'Active',
        serviceScope: 'Full',
        terminalAssignment: 'Terminal 2',
        createdAt: '2024-02-20',
        updatedAt: '2024-07-25'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        companyName: 'Gerry s dnata',
        licenseNo: 'GHA-003',
        country: 'Pakistan',
        companyNo: 'GDN-11223',
        contactName: 'Aslam Raza',
        email: 'aslam@dnata.pk',
        status: 'Active',
        serviceScope: 'Full',
        terminalAssignment: 'All Terminals',
        createdAt: '2024-03-15',
        updatedAt: '2024-08-20'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        companyName: 'AeroGround Pakistan',
        licenseNo: 'GHA-004',
        country: 'Pakistan',
        companyNo: 'AGP-44556',
        contactName: 'Bilal Hussain',
        email: 'bilal@aeroground.pk',
        status: 'Inactive',
        serviceScope: 'Partial',
        terminalAssignment: 'Terminal 1',
        createdAt: '2024-04-01',
        updatedAt: '2024-09-10'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        companyName: 'Emirates Ground Handling',
        licenseNo: 'GHA-005',
        country: 'UAE',
        companyNo: 'EGH-77889',
        contactName: 'Khalid Omar',
        email: 'khalid@egh.ae',
        status: 'Active',
        serviceScope: 'Full',
        terminalAssignment: 'Terminal 3',
        createdAt: '2024-05-10',
        updatedAt: '2024-10-05'
    },
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
        companyName: 'Swissport Pakistan',
        licenseNo: 'GHA-006',
        country: 'Pakistan',
        companyNo: 'SWP-99001',
        contactName: 'Tariq Ali',
        email: 'tariq@swissport.pk',
        status: 'Active',
        serviceScope: 'Cargo-Only',
        terminalAssignment: 'Cargo Area',
        createdAt: '2024-06-20',
        updatedAt: '2024-11-15'
    }
];
const monthlyFlightsData = [
    {
        month: 'Jan',
        flights: 1240,
        passengers: 86800
    },
    {
        month: 'Feb',
        flights: 1180,
        passengers: 82600
    },
    {
        month: 'Mar',
        flights: 1350,
        passengers: 94500
    },
    {
        month: 'Apr',
        flights: 1420,
        passengers: 99400
    },
    {
        month: 'May',
        flights: 1520,
        passengers: 106400
    },
    {
        month: 'Jun',
        flights: 1680,
        passengers: 117600
    },
    {
        month: 'Jul',
        flights: 1890,
        passengers: 132300
    },
    {
        month: 'Aug',
        flights: 1950,
        passengers: 136500
    },
    {
        month: 'Sep',
        flights: 1720,
        passengers: 120400
    },
    {
        month: 'Oct',
        flights: 1580,
        passengers: 110600
    },
    {
        month: 'Nov',
        flights: 1340,
        passengers: 93800
    },
    {
        month: 'Dec',
        flights: 1460,
        passengers: 102200
    }
];
const recentActivity = [
    {
        id: '1',
        action: 'New airline registered',
        entity: 'IndiGo Airlines',
        time: '2 hours ago',
        type: 'create'
    },
    {
        id: '2',
        action: 'Status updated',
        entity: 'PIA',
        time: '5 hours ago',
        type: 'update'
    },
    {
        id: '3',
        action: 'GHA license renewed',
        entity: 'Shaheen Airport Services',
        time: '1 day ago',
        type: 'update'
    },
    {
        id: '4',
        action: 'Airline deactivated',
        entity: 'Air India',
        time: '2 days ago',
        type: 'delete'
    },
    {
        id: '5',
        action: 'New GHA registered',
        entity: 'Swissport Pakistan',
        time: '3 days ago',
        type: 'create'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-app_src_05488fc._.js.map