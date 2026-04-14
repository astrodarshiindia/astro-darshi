'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';

interface Product {
    id: string;
    name: string;
    image_url: string;
    price: number;
    price_type: 'total' | 'per_unit';
    unit_name: 'total' | 'ratti';
    description: string;
    is_active: boolean;
}

export default function AstroMallAdmin() {
    const { user, logout } = useAdminAuth();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        image_url: '',
        price: '',
        price_type: 'total' as 'total' | 'per_unit',
        unit_name: 'total' as 'total' | 'ratti',
        description: '',
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const response = await fetch('/api/admin/products', {
                headers: { 'Authorization': `Bearer ${token}` },
            });
            const data = await response.json();
            setProducts(data.products || []);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
    };

    const saveProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken')!;

        try {
            const method = editingId ? 'PUT' : 'POST';
            const url = editingId ? `/api/admin/products` : `/api/admin/products`;

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(editingId ? { id: editingId, ...formData } : formData),
            });

            if (response.ok) {
                setFormData({ name: '', image_url: '', price: '', price_type: 'total', unit_name: 'total', description: '' });
                setEditingId(null);
                fetchProducts();
            }
        } catch (error) {
            console.error('Failed to save product:', error);
        }
    };

    const deleteProduct = async (id: string) => {
        if (!confirm('Delete this product?')) return;

        const token = localStorage.getItem('adminToken')!;
        try {
            const response = await fetch('/api/admin/products', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) fetchProducts();
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const editProduct = (product: Product) => {
        setFormData({
            name: product.name,
            image_url: product.image_url || '',
            price: product.price.toString(),
            price_type: product.price_type,
            unit_name: product.unit_name,
            description: product.description || '',
        });
        setEditingId(product.id);
    };

    if (!user) return null;

    return (
        <main className="min-h-screen bg-background">
            <AdminSidebar onLogout={logout} />
            <div className="md:ml-64 p-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-serif text-primary mb-2">Astro Mall</h1>
                    <p className="text-muted-foreground">Manage gemstones and astro products</p>
                </div>

                {/* Add/Edit Form */}
                <Card className="mb-8 cosmic-border glass-effect">
                    <CardHeader>
                        <CardTitle>{editingId ? 'Edit Product' : 'Add New Product'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={saveProduct} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        step="0.01"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="price_type">Price Type</Label>
                                    <Select value={formData.price_type} onValueChange={(v) => setFormData({ ...formData, price_type: v as any })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="total">Total</SelectItem>
                                            <SelectItem value="per_unit">Per Unit</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="unit_name">Unit</Label>
                                    <Select value={formData.unit_name} onValueChange={(v) => setFormData({ ...formData, unit_name: v as any })}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="total">Total</SelectItem>
                                            <SelectItem value="ratti">Ratti</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="image_url">Image URL</Label>
                                    <Input
                                        id="image_url"
                                        placeholder="https://example.com/image.jpg"
                                        value={formData.image_url}
                                        onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Gemstone benefits, weight, origin..."
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">
                                    {editingId ? 'Update' : 'Create Product'}
                                </Button>
                                {editingId && (
                                    <Button type="button" variant="outline" onClick={() => {
                                        setEditingId(null);
                                        setFormData({ name: '', image_url: '', price: '', price_type: 'total', unit_name: 'total', description: '' });
                                    }}>
                                        Cancel
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Products List */}
                <Card className="cosmic-border glass-effect">
                    <CardHeader>
                        <CardTitle>Products ({products.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <p>Loading...</p>
                        ) : products.length === 0 ? (
                            <p>No products yet. Add one above!</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <div key={product.id} className="border rounded-lg p-4 hover:shadow-md">
                                        {product.image_url && (
                                            <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover rounded mb-3" />
                                        )}
                                        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                                        <div className="text-2xl font-bold text-primary mb-2">
                                            ₹{product.price}
                                            {product.price_type === 'per_unit' && (
                                                <span className="text-sm font-normal"> / {product.unit_name}</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{product.description}</p>
                                        <div className="flex gap-2">
                                            <Badge variant={product.is_active ? "default" : "secondary"}>{product.is_active ? "Active" : "Inactive"}</Badge>
                                            <Button size="sm" variant="outline" onClick={() => editProduct(product)}>
                                                Edit
                                            </Button>
                                            <Button size="sm" variant="destructive" onClick={() => deleteProduct(product.id)}>
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

