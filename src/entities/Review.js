class Review {
    id
    title
    description
    rating
    time_review
    result_review
    treatment_review
    consumer_id
    provider_id

    constructor(
        title,
        description,
        rating,
        time_review,
        result_review,
        treatment_review,
        consumer_id,
        provider_id
    ) {
        this.id = self.crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.time_review = time_review;
        this.result_review = result_review;
        this.treatment_review = treatment_review;
        this.consumer_id = consumer_id;
        this.provider_id = provider_id;
    }
}