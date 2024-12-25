"use client";

import { useState, useCallback } from "react";
import { Post } from "./post";
import { useInfiniteScroll } from '../components/hooks/useInfiniteScroll'
const names = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "Elijah",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Evelyn",
  "Alexander",
  "Harper",
];

const topics = [
  "travel",
  "food",
  "technology",
  "sports",
  "music",
  "art",
  "fashion",
  "nature",
  "books",
  "movies",
];

const generateRandomPost = (id: number) => {
  const name = names[Math.floor(Math.random() * names.length)];
  const topic = topics[Math.floor(Math.random() * topics.length)];
  return {
    id,
    username: name,
    avatar: `https://i.pravatar.cc/150?img=${id % 70}`,
    content: `Just had an amazing experience with ${topic}! Can't wait to share more about it. #${topic}Lover`,
    image: `https://picsum.photos/seed/${id}/1080/720`,
    likes: Math.floor(Math.random() * 1000),
    comments: [
      {
        username: names[Math.floor(Math.random() * names.length)],
        avatar: `https://i.pravatar.cc/150?img=${(id * 2) % 70}`,
        content: `Wow, that's awesome! I love ${topic} too!`,
      },
    ],
    shares: Math.floor(Math.random() * 100),
  };
};

export function Feed() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 10 }, (_, i) => generateRandomPost(i + 1))
  );

  const loadMorePosts = useCallback(() => {
    setTimeout(() => {
      const newPosts = Array.from({ length: 5 }, (_, i) =>
        generateRandomPost(posts.length + i + 1)
      );
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setIsFetching(false);
    }, 1000); // Simulate network delay
  }, [posts.length]);

  const { isFetching, setIsFetching } = useInfiniteScroll(loadMorePosts);

  return (
    <div className="space-y-6 p-4">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      {isFetching && (
        <div className="text-center py-4">Loading more posts...</div>
      )}
    </div>
  );
}
