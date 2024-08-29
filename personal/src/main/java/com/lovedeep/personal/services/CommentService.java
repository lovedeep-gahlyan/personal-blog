package com.lovedeep.personal.services;


import com.lovedeep.personal.dto.CommentDTO;

public interface CommentService {
    CommentDTO createComment(CommentDTO commentDTO);
    CommentDTO updateComment(Long id, CommentDTO commentDTO);
    void deleteComment(Long id);
}
