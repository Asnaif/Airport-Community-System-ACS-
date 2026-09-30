module.exports = [
"[project]/next-app/src/app/(dashboard)/airlines/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AirlinesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/ui/DataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/data/seed.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/pen.mjs [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/ellipsis.mjs [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2d$takeoff$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlaneTakeoff$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plane-takeoff.mjs [app-ssr] (ecmascript) <export default as PlaneTakeoff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-ssr] (ecmascript) <export default as Globe>");
'use client';
;
;
;
;
;
;
;
function AirlinesPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const columnDefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                headerName: 'Airline Details',
                field: 'legalName',
                minWidth: 280,
                flex: 1.5,
                cellRenderer: (params)=>{
                    if (!params.value) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center shrink-0 border border-primary-100 dark:border-primary-800/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-primary-700 dark:text-primary-400",
                                    children: params.data.iataCode
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-slate-800 dark:text-slate-200",
                                        children: params.value
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-0.5 text-xs text-slate-500 dark:text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2d$takeoff$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlaneTakeoff$3e$__["PlaneTakeoff"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 59
                                                    }, this),
                                                    " ",
                                                    params.data.icaoCode
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 59
                                                    }, this),
                                                    " ",
                                                    params.data.country
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this);
                }
            },
            {
                headerName: 'Contact Info',
                field: 'contactName',
                minWidth: 220,
                flex: 1.2,
                cellRenderer: (params)=>{
                    if (!params.value) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center h-full gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 14,
                                        className: "text-primary-500"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    params.value
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    params.data.email
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this);
                }
            },
            {
                headerName: 'Company Reg.',
                field: 'companyNo',
                width: 160,
                cellRenderer: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium font-mono border border-slate-200 dark:border-slate-700",
                            children: params.value
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
            },
            {
                headerName: 'Status',
                field: 'status',
                width: 130,
                cellRenderer: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            status: params.value
                        }, void 0, false, {
                            fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
            },
            {
                headerName: 'Actions',
                field: 'id',
                width: 100,
                sortable: false,
                filter: false,
                cellRenderer: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end h-full gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push(/airlines/ / edit),
                                className: "p-1.5 rounded-lg text-slate-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors cursor-pointer",
                                title: "Edit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                title: "More",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
            }
        ], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-slate-800 dark:text-white",
                        children: "Airlines Management"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 dark:text-slate-400 mt-1",
                        children: "Manage all registered airlines in the system"
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$components$2f$ui$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    rowData: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$data$2f$seed$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["airlineData"],
                    columnDefs: columnDefs,
                    createLink: "/airlines/create",
                    createLabel: "New Airline"
                }, void 0, false, {
                    fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/app/(dashboard)/airlines/page.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}),
"[project]/next-app/src/components/ui/Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Badge({ status, size = 'md', onClick }) {
    const colors = {
        Active: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800',
        Inactive: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
        Pending: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800'
    };
    const dotColors = {
        Active: 'bg-emerald-500',
        Inactive: 'bg-red-500',
        Pending: 'bg-amber-500'
    };
    const sizes = {
        sm: 'px-2.5 py-0.5 text-[10px]',
        md: 'px-3 py-1 text-xs'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1.5 rounded-full border font-semibold', 'transition-all duration-200 cursor-pointer', 'hover:shadow-sm active:scale-95', colors[status], sizes[size]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-1.5 h-1.5 rounded-full', dotColors[status])
            }, void 0, false, {
                fileName: "[project]/next-app/src/components/ui/Badge.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            status
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/components/ui/Badge.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/next-app/src/components/ui/DataTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$ag$2d$grid$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-app/node_modules/ag-grid-react/dist/package/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/ag-grid-community/dist/package/main.esm.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/chevrons-left.mjs [app-ssr] (ecmascript) <export default as ChevronsLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsRight$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/chevrons-right.mjs [app-ssr] (ecmascript) <export default as ChevronsRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/next-app/node_modules/lucide-react/dist/esm/icons/download.mjs [app-ssr] (ecmascript) <export default as Download>");
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ModuleRegistry"].registerModules([
    __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$ag$2d$grid$2d$community$2f$dist$2f$package$2f$main$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AllCommunityModule"]
]);
function DataTable({ rowData, columnDefs, createLink, createLabel = 'Create', onExport, height = 520 }) {
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [totalRows, setTotalRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const onSearchChange = (e)=>{
        setSearchText(e.target.value);
        gridRef.current?.api?.setGridOption('quickFilterText', e.target.value);
    };
    const onPaginationChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (gridRef.current?.api) {
            const api = gridRef.current.api;
            setCurrentPage(api.paginationGetCurrentPage());
            setTotalPages(api.paginationGetTotalPages());
            setTotalRows(api.paginationGetRowCount());
        }
    }, []);
    const goFirst = ()=>gridRef.current?.api?.paginationGoToFirstPage();
    const goPrev = ()=>gridRef.current?.api?.paginationGoToPreviousPage();
    const goNext = ()=>gridRef.current?.api?.paginationGoToNextPage();
    const goLast = ()=>gridRef.current?.api?.paginationGoToLastPage();
    const onPageSizeChange = (e)=>{
        const size = Number(e.target.value);
        setPageSize(size);
        gridRef.current?.api?.paginationSetPageSize(size);
    };
    const startRow = currentPage * pageSize + 1;
    const endRow = Math.min(startRow + pageSize - 1, totalRows);
    const handleExport = ()=>{
        if (onExport) {
            onExport();
        } else {
            gridRef.current?.api?.exportDataAsCsv({
                fileName: 'export.csv'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExport,
                            className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                "Export"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 bg-white dark:bg-slate-800 w-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        className: "text-slate-400 dark:text-slate-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search records...",
                                        value: searchText,
                                        onChange: onSearchChange,
                                        className: "w-full outline-none text-sm text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            createLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: createLink,
                                className: "flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md shadow-primary-500/20 hover:shadow-lg no-underline active:scale-[0.97]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    createLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ag-theme-quartz rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700",
                style: {
                    height,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$ag$2d$grid$2d$react$2f$dist$2f$package$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgGridReact"], {
                    ref: gridRef,
                    rowData: rowData,
                    columnDefs: columnDefs,
                    pagination: true,
                    paginationPageSize: pageSize,
                    paginationPageSizeSelector: [
                        5,
                        10,
                        20,
                        50
                    ],
                    suppressPaginationPanel: true,
                    onPaginationChanged: onPaginationChanged,
                    domLayout: "normal",
                    rowHeight: 60,
                    headerHeight: 48,
                    defaultColDef: {
                        resizable: true,
                        sortable: true,
                        filter: true
                    },
                    animateRows: true,
                    getRowStyle: ()=>({
                            borderBottom: '1px solid var(--border-color)'
                        })
                }, void 0, false, {
                    fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mt-4 px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    [
                                        {
                                            onClick: goFirst,
                                            disabled: currentPage === 0,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsLeft$3e$__["ChevronsLeft"]
                                        },
                                        {
                                            onClick: goPrev,
                                            disabled: currentPage === 0,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"]
                                        }
                                    ].map(({ onClick, disabled, icon: Icon }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClick,
                                            disabled: disabled,
                                            className: "w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 flex items-center justify-center rounded-lg border border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold",
                                        children: currentPage + 1
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        {
                                            onClick: goNext,
                                            disabled: currentPage >= totalPages - 1,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"]
                                        },
                                        {
                                            onClick: goLast,
                                            disabled: currentPage >= totalPages - 1,
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsRight$3e$__["ChevronsRight"]
                                        }
                                    ].map(({ onClick, disabled, icon: Icon }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClick,
                                            disabled: disabled,
                                            className: "w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: pageSize,
                                        onChange: onPageSizeChange,
                                        className: "border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5 text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 outline-none cursor-pointer",
                                        children: [
                                            5,
                                            10,
                                            20,
                                            50
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "per page"
                                    }, void 0, false, {
                                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500 dark:text-slate-400",
                        children: totalRows > 0 ? `${startRow} - ${endRow} of ${totalRows} items` : '0 items'
                    }, void 0, false, {
                        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/next-app/src/components/ui/DataTable.tsx",
        lineNumber: 77,
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

//# sourceMappingURL=next-app_src_135qkxf._.js.map