package com.lovedeep.personal.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDTO {
    private Long id;
    private String content;
    private Long postId;
    private Long userId;
    private String fullCommenterName; // to include the username in response
    private LocalDateTime createdAt;
}
