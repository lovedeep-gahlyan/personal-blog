package com.lovedeep.personal.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {

    private Long id;
    private String postTitle;
    private String postContent;
    private LocalDateTime postCreatedDate;
    private String coverImageUrl;
    private String authorId;
    private String fullAuthorName;
    private String categoryId;
    private String categoryName;
    private List<CommentDTO> comments;

}
