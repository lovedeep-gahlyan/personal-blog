package com.lovedeep.personal.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/*
@Data:  This is the most convenient annotation. It combines several features into one:
Generates getters for all fields.
Generates setters for all non-final fields.
Generates a toString(), equals(), and hashCode() method.
Generates a constructor that takes all final fields as arguments (if any).
 */

/*
Builder method example
Post post = Post.builder()
                .title("My First Blog Post")
                .description("This is a description of my first post.")
                .content("This is the main content of my first post.")
                .coverImageUrl("https://cloudinary.com/my_image.jpg")
                .author(author)
                .category(category)
                .build();
 */

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String postTitle;

    @Column(nullable = false,columnDefinition = "TEXT")
    private String postContent;

    @Column(name = "cover_image_url")
    private String coverImageUrl;

    @CreationTimestamp
    private LocalDateTime postCreatedDate;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "post")
    private List<Comment> comments = new ArrayList<>();
}
