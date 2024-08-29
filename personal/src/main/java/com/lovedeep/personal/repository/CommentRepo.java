package com.lovedeep.personal.repository;

import com.lovedeep.personal.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepo extends JpaRepository<Comment,Long> {
    List<Comment> findByPostId(Long postId);
}
