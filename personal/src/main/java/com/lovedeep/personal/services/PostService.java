package com.lovedeep.personal.services;

import com.lovedeep.personal.dto.PostDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {
    PostDTO createPost(PostDTO postDTO, MultipartFile coverImage);
    PostDTO getPostById(Long id);
    List<PostDTO> getAllPosts();
    PostDTO updatePost(Long id, PostDTO postDTO, MultipartFile coverImage);
    void deletePost(Long id);

}
