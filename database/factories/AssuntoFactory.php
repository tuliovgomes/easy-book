<?php

namespace Database\Factories;

use App\Models\Assunto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Assunto>
 */
class AssuntoFactory extends Factory
{
    protected $model = Assunto::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descricao' => fake()->unique()->words(2, true),
        ];
    }
}
