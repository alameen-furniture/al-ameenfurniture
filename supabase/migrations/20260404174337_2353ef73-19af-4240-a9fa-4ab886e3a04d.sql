-- 1. Remove the overly permissive public reads policy on enquiry-images
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;

-- 2. Drop the old weak insert policy and replace with a stricter one
DROP POLICY IF EXISTS "Allow validated anonymous inserts" ON public.enquiries;

CREATE POLICY "Allow validated anonymous inserts"
ON public.enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL
  AND length(name) > 0
  AND length(name) <= 200
  AND phone IS NOT NULL
  AND length(phone) >= 7
  AND length(phone) <= 20
  AND (email IS NULL OR (length(email) <= 255 AND email LIKE '%@%.%'))
  AND (requirement IS NULL OR length(requirement) <= 2000)
  AND (image_url IS NULL OR length(image_url) <= 1000)
);

-- 3. Replace upload policy with one that also limits file size (10MB)
DROP POLICY IF EXISTS "Allow image uploads to enquiry-images" ON storage.objects;

CREATE POLICY "Allow image uploads to enquiry-images"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'enquiry-images'
  AND storage.extension(name) = ANY (ARRAY['jpg', 'jpeg', 'png', 'webp', 'gif'])
  AND (COALESCE((metadata->>'size')::int, 0) <= 10485760)
);