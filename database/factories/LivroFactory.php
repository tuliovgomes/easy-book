<?php

namespace Database\Factories;

use App\Models\Livro;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Livro>
 */
class LivroFactory extends Factory
{
     protected $model = Livro::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cod' => fake()->unique()->regexify('[A-Z]{3}[0-9]{3}'),
            'titulo' => substr(fake()->sentence(3), 0, 40),
            'editora' => substr(fake()->company(), 0, 40),
            'edicao' => fake()->numberBetween(1, 20),
            'ano_publicacao' => (string) fake()->numberBetween(
                1950,
                (int) date('Y')
            ),
            'valor' => fake()->randomFloat(2, 10, 99999.99),

        ];
    }
}
