// C program to demonstrate
// example of time() function.
#include <stdio.h>
#include <time.h>

int main ()
{
	time_t seconds;
	time_t seconds2;
	time_t diff;
	
	seconds = time(NULL);
    int limit=1000000;
    for (int i = 0; i <limit ; i++)
    {
        printf(".");
    }
	seconds2 = time(NULL);
	printf("\n\n Limit = %d\n", limit);
	printf("\n\n Started at = %ld\n", seconds);
	printf("\n Stopped at = %ld\n", seconds2);
	
    diff=seconds2-seconds;
    printf("\n Diley = %ld \n",diff);
	return(0);
}
