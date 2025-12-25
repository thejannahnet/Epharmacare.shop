"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    Package,
    Settings,
    Search,
    Bell,
    MoreVertical,
    CheckCircle,
    Clock,
    XCircle
} from "lucide-react";
import { products } from "@/lib/products";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("orders");

    // Mock orders data
    const orders = [
        { id: "ORD-001", customer: "John Doe", email: "john@example.com", total: "$324.00", status: "Pending", date: "2025-12-25" },
        { id: "ORD-002", customer: "Jane Smith", email: "jane@example.com", total: "$564.00", status: "Completed", date: "2025-12-24" },
        { id: "ORD-003", customer: "Mike Johnson", email: "mike@example.com", total: "$299.00", status: "Cancelled", date: "2025-12-23" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="text-white w-5 h-5" />
                        </div>
                        <span className="text-lg font-bold text-slate-900">Admin Panel</span>
                    </div>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {[
                        { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
                        { id: "orders", icon: ShoppingBag, label: "Orders" },
                        { id: "products", icon: Package, label: "Products" },
                        { id: "customers", icon: Users, label: "Customers" },
                        { id: "settings", icon: Settings, label: "Settings" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                    ? "bg-sky-50 text-sky-600 font-bold"
                                    : "text-slate-500 hover:bg-slate-50"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t">
                    <div className="flex items-center gap-3 px-4 py-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-full" />
                        <div>
                            <p className="text-sm font-bold text-slate-900">Admin User</p>
                            <p className="text-xs text-slate-500">admin@epharma.care</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search orders, products..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-slate-600 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold text-slate-900 capitalize">{activeTab}</h1>
                        <button className="px-4 py-2 bg-sky-500 text-white rounded-lg font-bold hover:bg-sky-600 transition-all text-sm">
                            Export Data
                        </button>
                    </div>

                    {activeTab === "orders" && (
                        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Order ID</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Customer</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Total</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-mono text-sm text-sky-600 font-bold">{order.id}</td>
                                            <td className="px-6 py-4">
                                                <p className="font-bold text-slate-900">{order.customer}</p>
                                                <p className="text-xs text-slate-500">{order.email}</p>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-slate-900">{order.total}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${order.status === "Completed" ? "bg-green-100 text-green-700" :
                                                        order.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                                            "bg-red-100 text-red-700"
                                                    }`}>
                                                    {order.status === "Completed" && <CheckCircle className="w-3 h-3" />}
                                                    {order.status === "Pending" && <Clock className="w-3 h-3" />}
                                                    {order.status === "Cancelled" && <XCircle className="w-3 h-3" />}
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-500">{order.date}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                                                    <MoreVertical className="w-4 h-4 text-slate-400" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === "products" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div key={product.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                                    <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 mb-1">{product.name}</h3>
                                        <p className="text-xs text-slate-500 mb-2">{product.category}</p>
                                        <p className="font-bold text-sky-500">{product.price.split(' – ')[0]}</p>
                                    </div>
                                    <button className="h-fit p-2 hover:bg-slate-100 rounded-lg transition-colors">
                                        <MoreVertical className="w-4 h-4 text-slate-400" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "dashboard" && (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: "Total Revenue", value: "$1,284.00", change: "+12.5%", icon: ShoppingBag, color: "bg-sky-500" },
                                { label: "Total Orders", value: "48", change: "+5.2%", icon: Package, color: "bg-amber-500" },
                                { label: "New Customers", value: "12", change: "+2.4%", icon: Users, color: "bg-green-500" },
                                { label: "Avg. Order Value", value: "$26.75", change: "-1.2%", icon: LayoutDashboard, color: "bg-purple-500" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                                            <stat.icon className="text-white w-5 h-5" />
                                        </div>
                                        <span className={`text-xs font-bold ${stat.change.startsWith('+') ? "text-green-500" : "text-red-500"}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
