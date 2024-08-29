package com.lovedeep.personal.services.impl;

import com.lovedeep.personal.dto.CommentDTO;
import com.lovedeep.personal.entity.Comment;
import com.lovedeep.personal.entity.Post;
import com.lovedeep.personal.entity.User;
import com.lovedeep.personal.exception.ResourceNotFoundException;
import com.lovedeep.personal.repository.CommentRepo;
import com.lovedeep.personal.repository.PostRepo;
import com.lovedeep.personal.repository.UserRepo;
import com.lovedeep.personal.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepo commentRepository;

    @Autowired
    private PostRepo postRepository;

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CommentDTO createComment(CommentDTO commentDTO) {
        Post post = postRepository.findById(commentDTO.getPostId())
                .orElseThrow(() -> new ResourceNotFoundException("Post not found"));

        User user = userRepository.findById(commentDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Comment comment = modelMapper.map(commentDTO, Comment.class);
        comment.setPost(post);
        comment.setUser(user);

        Comment savedComment = commentRepository.save(comment);
        CommentDTO savedCommentDTO = modelMapper.map(savedComment, CommentDTO.class);
        savedCommentDTO.setFullCommenterName(savedComment.getUser().getFirstName());
        return savedCommentDTO;
    }

    @Override
    public CommentDTO updateComment(Long id, CommentDTO commentDTO) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found"));

        comment.setContent(commentDTO.getContent());

        Comment updatedComment = commentRepository.save(comment);
        CommentDTO updatedCommentDTO = modelMapper.map(updatedComment, CommentDTO.class);
        updatedCommentDTO.setFullCommenterName(updatedComment.getUser().getFirstName());
        return updatedCommentDTO;
    }

    @Override
    public void deleteComment(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found"));
        commentRepository.delete(comment);
    }
}