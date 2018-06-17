@if (is_array($listing))
  @foreach ($listing as $index => $value)
    @php($value = ['value' => $value, 'parent' => 'parent'])
  @endforeach
  
  @each('frontend.partials.listing', $value, 'listing')
@else
  @isset($listing['parent'])
    {{ $listing['parent'] }}
  @endisset
  {{ $listing }}
@endif
