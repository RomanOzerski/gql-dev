<?php

namespace App\GraphQL\Queries;

use App\Post;

class LatestPost
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return Post::all()->last();
    }
}
