package com.lovedeep.personal.services.impl;

import com.lovedeep.personal.dto.CommentDTO;
import com.lovedeep.personal.dto.PostDTO;
import com.lovedeep.personal.entity.Category;
import com.lovedeep.personal.entity.Post;
import com.lovedeep.personal.entity.User;
import com.lovedeep.personal.exception.ResourceNotFoundException;
import com.lovedeep.personal.repository.CategoryRepo;
import com.lovedeep.personal.repository.CommentRepo;
import com.lovedeep.personal.repository.PostRepo;
import com.lovedeep.personal.repository.UserRepo;
import com.lovedeep.personal.services.CloudinaryService;
import com.lovedeep.personal.services.PostService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    CloudinaryService cloudinaryService;

    @Autowired
    UserRepo userRepo;

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    CommentRepo commentRepo;


    @Override
    public PostDTO createPost(PostDTO postDTO, MultipartFile coverImage) {
        if(coverImage != null && !coverImage.isEmpty()){
            try{
                String url = cloudinaryService.uploadImage(coverImage);
                postDTO.setCoverImageUrl(url);
            }catch(IOException e){
                throw new RuntimeException("Failed to upload image", e);
            }
        }

        Category category = categoryRepo.findById(Long.valueOf(postDTO.getCategoryId())) .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        User user = userRepo.findById(Long.valueOf(postDTO.getAuthorId())).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Post post = modelMapper.map(postDTO,Post.class);
        post.setAuthor(user);
        post.setCategory(category);
        post.setPostCreatedDate(LocalDateTime.now());
        Post savedPost  = postRepo.save(post);
        PostDTO createdPost = modelMapper.map(savedPost, PostDTO.class);
        createdPost.setFullAuthorName(savedPost.getAuthor().getFirstName());
        return createdPost;
    }

    @Override
    public PostDTO getPostById(Long id) {
        Post post = postRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        PostDTO postDTO = modelMapper.map(post,PostDTO.class);
        postDTO.setFullAuthorName(post.getAuthor().getFirstName());

        List<CommentDTO> comments = commentRepo.findByPostId(id).stream()
                .map(comment -> {
                    CommentDTO commentDTO = modelMapper.map(comment, CommentDTO.class);
                    commentDTO.setFullCommenterName(comment.getUser().getFirstName());
                    return commentDTO;
                })
                .collect(Collectors.toList());
        postDTO.setComments(comments);

        return  postDTO;
    }

    @Override
    public List<PostDTO> getAllPosts() {
        List<Post> posts = postRepo.findAll();
        return posts.stream().map(post -> {
            PostDTO postDTO = modelMapper.map(post,PostDTO.class);
            postDTO.setFullAuthorName(post.getAuthor().getFirstName());
            return postDTO;
        }).collect(Collectors.toList());
    }

    @Override
    public PostDTO updatePost(Long id, PostDTO postDTO, MultipartFile coverImage) {
        Post post = postRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Post not found"));
        if(coverImage != null && !coverImage.isEmpty()){
            try{
                String url = cloudinaryService.uploadImage(coverImage);
                postDTO.setCoverImageUrl(url);
            }catch(IOException e){
                throw new RuntimeException("Failed to upload", e);
            }
        }

        Category category = categoryRepo.findById(Long.valueOf(postDTO.getCategoryId())).orElseThrow(()->new ResourceNotFoundException("Category not found"));
        post.setPostTitle(postDTO.getPostTitle());
        post.setPostContent(postDTO.getPostContent());
        post.setCoverImageUrl(postDTO.getCoverImageUrl());
        post.setCategory(category);
        Post updatedPost = postRepo.save(post);
        PostDTO updatedPostDTO = modelMapper.map(updatedPost, PostDTO.class);
        updatedPostDTO.setFullAuthorName(updatedPost.getAuthor().getFirstName());

        return updatedPostDTO;



    }

    @Override
    public void deletePost(Long id) {
        Post post = postRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post not found"));
        postRepo.delete(post);
    }
}
