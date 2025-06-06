import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Product, Review as ReviewType } from "@/lib/types";
import { FiveStarRating } from "./five-star-rating";
import { AIReviewSummary } from "./ai-review-summary";

export async function Reviews({ product }: { product: Product }) {
  // Sort reviews by date descending (newest first)
  const sortedReviews = [...product.reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className="mx-auto px-4 md:px-6 max-w-2xl grid gap-12">
      <AIReviewSummary product={product} />
      {sortedReviews.map((review) => (
        <div key={review.review}>
          <Review key={review.review} review={review} />
        </div>
      ))}
    </div>
  );
}

export function Review({ review }: { review: ReviewType }) {
  const date = new Date(review.date);
  return (
    <div className="flex gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="grid gap-4">
        <div className="flex gap-4 items-start">
          <div className="grid gap-0.5 text-sm">
            <h3 className="font-semibold">{review.authorName}</h3>
            <time
              className="text-sm text-gray-500 dark:text-gray-400"
              suppressHydrationWarning
            >
              {timeAgo(date)}
            </time>
          </div>
          <div className="flex items-center gap-0.5 ml-auto">
            <FiveStarRating rating={review.stars} />
          </div>
        </div>
        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * You probably want to wrap the parent element of this component with `suppressHydrationWarning`
 */
const timeAgo = (date: Date, suffix = true) => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60)
    return `${minutes} minute${
      minutes !== 1 ? "s" : ""
    }${suffix ? " ago" : ""}`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24)
    return `${hours} hour${hours !== 1 ? "s" : ""}${suffix ? " ago" : ""}`;
  const days = Math.floor(hours / 24);
  if (days < 30)
    return `${days} day${days !== 1 ? "s" : ""}${suffix ? " ago" : ""}`;
  const months = Math.floor(days / 30);
  if (months < 12)
    return `${months} month${months !== 1 ? "s" : ""}${suffix ? " ago" : ""}`;
  const years = Math.floor(months / 12);
  return `${years} year${years !== 1 ? "s" : ""}${suffix ? " ago" : ""}`;
};
