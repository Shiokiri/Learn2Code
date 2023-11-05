package com.example.databaselock.service;

import com.example.databaselock.entity.Article;
import com.example.databaselock.entity.Comment;
import com.example.databaselock.repository.ArticleRepository;
import com.example.databaselock.repository.CommentRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class CommentService {
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Transactional
    public void postComment(Long articleId, String content) {
        // Optional<Article> articleOptional = articleRepository.findById(articleId);
        Optional<Article> articleOptional = articleRepository.findArticleWithPessimisticLock(articleId);
        if (!articleOptional.isPresent()) {
            throw new RuntimeException("Article is not present.");
        }
        Article article = articleOptional.get();

        Comment comment = new Comment();
        comment.setArticleId(articleId);
        comment.setContent(content);
        commentRepository.save(comment);

        article.setCommentCount(article.getCommentCount() + 1);
        articleRepository.save(article);
    }
}
