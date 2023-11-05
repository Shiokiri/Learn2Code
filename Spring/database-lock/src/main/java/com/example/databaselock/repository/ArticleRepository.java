package com.example.databaselock.repository;

import com.example.databaselock.entity.Article;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    @Query(value = "select * from article a where a.id = :id for update", nativeQuery = true)
    Optional<Article> findArticleForUpdate(Long id);

    // for concurrent updates
    // MySQL need pessimistic locking in repeatable read(default)
    // serializable / repeatable read + pessimistic locking / read committed + optimistic locking
    // PostgreSQL do not need pessimistic locking in repeatable read
    // serializable / repeatable read / read committed + optimistic locking
    @Lock(value = LockModeType.PESSIMISTIC_WRITE)
    @Query("select a from Article a where a.id = :id")
    Optional<Article> findArticleWithPessimisticLock(Long id);
}
