import React from 'react';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';

const PostAuthor = () => {
    return (
        <div className="mx-auto max-w-4xl border-t pt-8">
            <div className="sm:grid sm:grid-cols-6 sm:items-start sm:gap-6 sm:space-y-0">
                <div className="w-full sm:w-auto">
                    <Image
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }}
                        src="/static/images/avatar.jpg"
                        alt="Khalil"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="sm:col-span-5">
                    <div className="space-y-6">
                        <div className="space-y-1 text-lg leading-6">
                            <h3 className="text-3xl font-extrabold tracking-tight">{siteMetadata.author}</h3>
                        </div>
                        <div className="text-sm pb-4">
                            <p>{siteMetadata.authorDescription}</p>
                            <p>Keep watching this space for more updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAuthor;
