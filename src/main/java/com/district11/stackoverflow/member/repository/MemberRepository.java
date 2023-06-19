package com.district11.stackoverflow.member.repository;

import com.district11.stackoverflow.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    //Member findByEmail(String email);
    Optional<Member> findByEmail(String email);
}
