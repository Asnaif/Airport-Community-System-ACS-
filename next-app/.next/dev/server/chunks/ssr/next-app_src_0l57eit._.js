module.exports = [
"[project]/next-app/src/app/(dashboard)/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$FlightChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/dashboard/FlightChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/dashboard/RecentActivity.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plane.mjs [app-ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/warehouse.mjs [app-ssr] (ecmascript) <export default as Warehouse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/file-check-corner.mjs [app-ssr] (ecmascript) <export default as FileCheck2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/stores/auth-store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function DashboardPage() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$stores$2f$auth$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const activeAirlines = __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["airlineData"].filter((a)=>a.status === 'Active').length;
    const activeGhas = __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ghaData"].filter((g)=>g.status === 'Active').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-slate-800 dark:text-white",
                            children: "Dashboard Overview"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 dark:text-slate-400 mt-1",
                            children: [
                                "Welcome back, ",
                                user?.name || 'Admin',
                                "! Here is what is happening today."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Active Airlines",
                        count: activeAirlines,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
                        color: "blue",
                        trend: {
                            value: 12,
                            isUp: true
                        },
                        delay: 100
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Registered GHAs",
                        count: activeGhas,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$warehouse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Warehouse$3e$__["Warehouse"],
                        color: "emerald",
                        trend: {
                            value: 4,
                            isUp: true
                        },
                        delay: 200
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Total Passengers",
                        count: 136500,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        color: "amber",
                        trend: {
                            value: 8,
                            isUp: true
                        },
                        delay: 300
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Flight Operations",
                        count: 1950,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2d$corner$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck2$3e$__["FileCheck2"],
                        color: "rose",
                        trend: {
                            value: 2.5,
                            isUp: false
                        },
                        delay: 400
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$FlightChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$dashboard$2f$RecentActivity$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/app/(dashboard)/dashboard/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/next-app/src/components/dashboard/FlightChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlightChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function FlightChart() {
    const [chartType, setChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('area');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-semibold text-slate-800 dark:text-white",
                                children: "Flight Operations"
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                children: "Monthly flights & passengers overview"
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setChartType('area'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-3 py-1 text-xs rounded-md font-medium transition-all cursor-pointer', chartType === 'area' ? 'bg-white dark:bg-slate-600 text-slate-700 dark:text-white shadow-sm' : 'text-slate-500'),
                                children: "Area"
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setChartType('bar'),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-3 py-1 text-xs rounded-md font-medium transition-all cursor-pointer', chartType === 'bar' ? 'bg-white dark:bg-slate-600 text-slate-700 dark:text-white shadow-sm' : 'text-slate-500'),
                                children: "Bar"
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: 280,
                children: chartType === 'area' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthlyFlightsData"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "flightGradient",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#3b82f6",
                                        stopOpacity: 0.3
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#3b82f6",
                                        stopOpacity: 0
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#e2e8f0"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "month",
                            tick: {
                                fontSize: 12,
                                fill: '#94a3b8'
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                            tick: {
                                fontSize: 12,
                                fill: '#94a3b8'
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "flights",
                            stroke: "#3b82f6",
                            strokeWidth: 2.5,
                            fill: "url(#flightGradient)"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monthlyFlightsData"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#e2e8f0"
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "month",
                            tick: {
                                fontSize: 12,
                                fill: '#94a3b8'
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                            tick: {
                                fontSize: 12,
                                fill: '#94a3b8'
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
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
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/components/dashboard/FlightChart.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/next-app/src/components/dashboard/RecentActivity.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentActivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RecentActivity() {
    const icons = {
        create: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"],
            color: 'text-emerald-500',
            bg: 'bg-emerald-50 dark:bg-emerald-900/30'
        },
        update: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
            color: 'text-primary-500',
            bg: 'bg-primary-50 dark:bg-primary-900/30'
        },
        delete: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
            color: 'text-red-500',
            bg: 'bg-red-50 dark:bg-red-900/30'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base font-semibold text-slate-800 dark:text-white",
                        children: "Recent Activity"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-xs text-primary-500 hover:text-primary-600 font-medium cursor-pointer",
                        children: "View All"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recentActivity"].map((item, i)=>{
                    const { icon: ItemIcon, color, bg } = icons[item.type];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3 animate-fade-in",
                        style: {
                            animationDelay: `${i * 100}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-8 h-8 rounded-lg flex items-center justify-center shrink-0', bg),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                                    size: 15,
                                    className: color
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-700 dark:text-slate-200 font-medium",
                                        children: item.action
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: item.entity
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this),
                                    item.time
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/components/dashboard/RecentActivity.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/next-app/src/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function StatsCard({ title, count, icon: Icon, trend, color = 'blue', delay = 0 }) {
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gradients = {
        blue: 'from-primary-500/10 to-primary-600/5 dark:from-primary-500/20 dark:to-primary-600/10',
        emerald: 'from-emerald-500/10 to-emerald-600/5 dark:from-emerald-500/20 dark:to-emerald-600/10',
        amber: 'from-amber-500/10 to-amber-600/5 dark:from-amber-500/20 dark:to-amber-600/10',
        rose: 'from-rose-500/10 to-rose-600/5 dark:from-rose-500/20 dark:to-rose-600/10'
    };
    const iconBg = {
        blue: 'bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400',
        emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400',
        amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400',
        rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400'
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsVisible(true), delay);
        return ()=>clearTimeout(timer);
    }, [
        delay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const duration = 1200;
        const steps = 40;
        const increment = count / steps;
        let current = 0;
        const timer = setInterval(()=>{
            current += increment;
            if (current >= count) {
                setDisplayCount(count);
                clearInterval(timer);
            } else {
                setDisplayCount(Math.floor(current));
            }
        }, duration / steps);
        return ()=>clearInterval(timer);
    }, [
        count,
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/60', 'bg-gradient-to-br shadow-sm hover:shadow-md transition-all duration-300', 'min-w-[260px] group', gradients[color], isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4', 'transition-all duration-500'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 w-1/2 h-full opacity-[0.07] pointer-events-none",
                style: {
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)'
                }
            }, void 0, false, {
                fileName: "[project]/next-app/src/components/ui/Card.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-4 px-6 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110', iconBg[color]),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 26,
                            strokeWidth: 1.8
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/components/ui/Card.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/ui/Card.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 dark:text-slate-400 font-medium",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/ui/Card.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl font-bold text-slate-800 dark:text-white animate-counter",
                                children: displayCount
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/components/ui/Card.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-xs font-medium mt-0.5', trend.isUp ? 'text-emerald-600' : 'text-red-500'),
                                children: [
                                    trend.isUp ? '+' : '-',
                                    trend.value,
                                    "% from last month"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/ui/Card.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/components/ui/Card.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/ui/Card.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/components/ui/Card.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/next-app/src/data/seed.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-ssr] (ecmascript)");
;
const airlineData = [
    {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateId"])(),
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
}),
];

//# sourceMappingURL=next-app_src_0l57eit._.js.map