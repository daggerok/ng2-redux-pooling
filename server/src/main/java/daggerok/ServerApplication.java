package daggerok;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.stream.Stream;

@SpringBootApplication
public class ServerApplication {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> Stream.of("one", "two", "three")
                .map(name -> new User().setName(name))
                .forEach(userRepository::save);
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
}

@Data
@Entity
@NoArgsConstructor
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
class User implements Serializable {

    @Id @GeneratedValue
    Long id;
    String name;
}

@RepositoryRestResource
interface UserRepository extends JpaRepository<User, Long> {}
