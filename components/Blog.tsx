
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import Modal from './Modal';

const BlogDetails: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div>
        <img src={post.imageUrl} alt={post.title} className="rounded-lg w-full mb-6 max-h-80 object-cover" />
        <h3 className="text-2xl font-bold text-textPrimary">{post.title}</h3>
        <div className="flex items-center text-sm text-textSecondary mt-2 mb-4">
            <span>{post.category}</span>
            <span className="mx-2">/</span>
            <time>{post.date}</time>
        </div>
        <p className="text-textSecondary whitespace-pre-wrap">{post.content}</p>
    </div>
);

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    return (
        <section>
            <h2 className="text-3xl font-bold text-textPrimary relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px] rounded-sm">Blog</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {BLOG_POSTS.map(post => (
                    <div
                        key={post.id}
                        className="bg-sidebarBg rounded-lg overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedPost(post)}
                    >
                        <div className="overflow-hidden">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="p-6">
                            <p className="text-xs text-textSecondary">{post.category} &bull; {post.date}</p>
                            <h3 className="text-lg font-semibold text-textPrimary mt-2 group-hover:text-accent transition-colors">{post.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} title="Blog Post">
                {selectedPost && <BlogDetails post={selectedPost} />}
            </Modal>
        </section>
    );
};

export default Blog;
