package com.lovedeep.personal.services;

import com.lovedeep.personal.dto.CategoryDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CategoryService {
    CategoryDTO createCategory(CategoryDTO categoryDTO, MultipartFile image);
    CategoryDTO getCategoryById(Long id);
    List<CategoryDTO> getAllCategories();
    CategoryDTO updateCategory(Long id, CategoryDTO categoryDTO, MultipartFile image);
    void deleteCategory(Long id);
}